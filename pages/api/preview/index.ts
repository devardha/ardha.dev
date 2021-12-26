import { getPostBySlug } from "../../../lib/graphql/queries";

export default async function handler(req, res) {
	const { secret, slug, apiID } = req.query;
	if (secret !== process.env.PREVIEW_SECRET || (slug != '' && !req.query.slug)){
		return res.status(401).json({ message: 'Invalid token' });
	}

	if(apiID === 'post'){
		const previewData = await getPostBySlug(slug, 'PREVIEW');

		if (!previewData.posts[0].slug) {
			return res.status(401).json({ message: 'Invalid slug' });
		}
		
		res.setPreviewData({});
	
		res.writeHead(307, {
			Location: '/blog/preview/' + previewData.posts[0].slug,
		});
	
		res.end();
	}else{
		return res.status(400).json({ message: `This content type doesn't support content preview` });
	}
}
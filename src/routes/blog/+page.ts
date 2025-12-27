import type { PageLoad } from './$types';

export interface PostMetadata {
	title: string;
	date: string;
	description: string;
	image?: string;
	imageAlt?: string;
}

export interface Post {
	slug: string;
	metadata: PostMetadata;
}

export const load: PageLoad = async () => {
	const posts: Post[] = [];

	const modules = import.meta.glob('/src/lib/posts/*.md', { eager: true });

	for (const path in modules) {
		const module = modules[path] as { metadata: PostMetadata };
		const slug = path.split('/').pop()?.replace('.md', '') ?? '';

		if (module.metadata) {
			posts.push({
				slug,
				metadata: module.metadata
			});
		}
	}

	// Sort by date, newest first
	posts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

	return { posts };
};

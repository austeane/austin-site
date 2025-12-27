import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { ComponentType, SvelteComponent } from 'svelte';

export interface PostMetadata {
	title: string;
	date: string;
	description: string;
	image?: string;
	imageAlt?: string;
}

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../lib/posts/${params.slug}.md`);

		return {
			content: post.default as ComponentType<SvelteComponent>,
			metadata: post.metadata as PostMetadata
		};
	} catch {
		throw error(404, `Post not found: ${params.slug}`);
	}
};

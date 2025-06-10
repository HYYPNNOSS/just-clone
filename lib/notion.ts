import { Client } from "@notionhq/client";
import {
	BlockObjectResponse,
	PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { cache } from "react";
import "server-only";

export const notionBlogs = new Client({
	auth: process.env.NOTION_BLOGS_API_KEY,
});

export const notionPartners = new Client({
	auth: process.env.NOTION_PARTENERS_API_KEY,
});

export const fetchPages = cache(() => {
	return notionBlogs.databases.query({
		database_id: process.env.NOTION_BLOGS_ID!,
		filter: {
			property: "Status",
			status: {
				equals: "Live",
			},
		},
	});
});

export const fetchPagesPartners = cache(() => {
	return notionPartners.databases.query({
		database_id: process.env.NOTION_PARTENERS_ID!,
		filter: {
			property: "Status",
			status: {
				equals: "Live",
			},
		},
	});
});

export const fetchBySlug = cache((slug: string) => {
	return notionBlogs.databases
		.query({
			database_id: process.env.NOTION_BLOGS_ID!,
			filter: {
				property: "slug",
				rich_text: {
					equals: slug,
				},
			},
		})
		.then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const fetchPageBlocks = cache((pageId: string) => {
	return notionBlogs.blocks.children
		.list({
			block_id: pageId,
		})
		.then((res) => res.results as BlockObjectResponse[]);
});

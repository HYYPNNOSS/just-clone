type pages_properties = {
	Status: {
		id: string;
		type: string;
		status: {
			id: string;
			name: string;
			color: string;
		};
	};
	slug: { id: string; type: string; rich_text: [[Object]] };
	Tags: { id: string; type: string; multi_select: [] };
	Date: {
		id: string;
		type: string;
		created_time: string;
	};
	Title: { id: string; type: string; title: [[Object]] };
};

type pages_result = {
	object: string;
	id: string;
	created_time: string;
	last_edited_time: string;
	created_by: { id: string; object: string };
	last_edited_by: { id: string; object: string };
	cover: { type: string; file: { expiry_time: string; url: string } };
	icon: null;
	parent: { database_id: string; type: string };
	archived: boolean;
	in_trash: boolean;
	properties: {
		Title: {
			id: string;
			type: string;
			title: [
				{
					annotations: {};
					href: string | null;
					plain_text: string | null;
					type: string;
				}
			];
		};
		slug: {
			id: string;
			type: string;
			rich_text: [
				{ href: string | null; plain_text: string; type: string }
			];
		};
	};
	url: string;
	public_url: string;
};

type pages_t = {
	object: string;
	results: pages_result[];
	next_cursor: null;
	has_more: false;
	type: sting;
	page_or_database: {};
	request_id: string;
};

export default {
	title: "Free Static Site",
	description: "How to use VitePress",
	base: '/free_static_site/',
	themeConfig: {
		nav: [
			{
				text: "note", link: '/guide/getting-started', activeMatch: "/guide/"
			}
		],
		sidebar: {
			'/guide/': [
				{
					text: "note",
					collapsible: false,
					items: [
						{ text: "Getting-Started", link: "/guide/getting-started" },
					]
				}
			]
		},
	}
}


const myExplorer = {

    id: 'root',
    name: "File Explorer",
    type: 'Folder',
    children: [
        {
            id: 'pub_folder',
            name: "Public",
            type: 'Folder',
            children: [
                {
                    id: 'asset_folder',
                    name: "assets",
                    type: 'Folder',
                    children: [
                        {
                            id: 'img_folder',
                            name: "logo.png",
                            type: 'File',
                            children: []
                        }
                    ]
                },
                {
                    id: 'hym_folder',
                    name: "index.html",
                    type: 'File',
                    children: []
                }
            ]
        },
        {
            id: 'src_folder',
            name: "src",
            type: 'Folder',
            children: [
                {
                    id: 'Appjsx_folder',
                    name: "App.jsx",
                    type: 'File',
                    children: []
                },
                {
                    id: 'Appcss_folder',
                    name: "App.css",
                    type: 'File',
                    children: []
                }
            ]
        },
        {
            id: 'pack_folder',
            name: "package.json",
            type: 'File',
            children: []
        }
    ]


}
export default myExplorer;
export type MessagesType = {
    message: string
    id: number
}
export type DialogsType = {
    name: string
    id: number
}
export type PostsType = {
    message: string
    id: number
    likeCounter: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage:DialogsPageType
    sidebar: SidebarType
}


let state: RootStateType = {
    profilePage: {
        posts: [
            { message: "Hello! It`s my new App!", id: 1, likeCounter: 5 },
            { message: "Today I'm happy", id: 2, likeCounter: 18 },
            { message: "Welcome", id: 3, likeCounter: 10 },
        ]
    },
    dialogsPage: {
         dialogs: [
            { name: "Ed", id: 1 },
            { name: "Alina", id: 2 },
            { name: "Oksana", id: 3 },
            { name: "Sasha", id: 4 },
            { name: "Tanya", id: 5 },
          ],
          
        messages: [
            { message: "Hello", id: 1 },
            { message: "Wat`s up?", id: 2 },
            { message: "Wow", id: 3 },
            { message: "Ahahaha", id: 4 },
            { message: "I`m fine(:", id: 5 },
          ]
    },
    sidebar: {}
}

export default state;
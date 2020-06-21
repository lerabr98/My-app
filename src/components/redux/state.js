let store = {
    _state: {
        profilePage:{
            posts: [
                {id: 1, message: 'Hi. How are you?', likesCount: 1},
                {id: 2, message: 'It\'s my firsts post', likesCount: 2},
            ],
            newPostText: "What is new?"
        },
        dialogsPage:{
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'I am learning react'},
                {id: 3, message: 'Wish you good luck'},
                {id: 4, message: 'Thank you'},
            ],
            dialogs:  [
                {id: 1, name: 'Anna'},
                {id: 2, name: 'Anny'},
                {id: 3, name: 'Ann'}
            ],
        },
    },
    _callSubscriber() {
        console.log('State has changed');
    },

    subscribe(observer) {
        console.log('Something has changed');
    },
    getState() {
        return this._state;
    },

    dispatch(action) { // {type: 'ADD-POST' }
            if (action.type === 'ADD-POST'){
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
            } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
            }

    }
}
export default store;
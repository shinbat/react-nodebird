export const initilalState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '제로초',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
          }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
          }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
          }],
          Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '우와 개정판이 나왔군요'
          }, {
            User: {
                nickname: 'hero',
            },
            content: '얼른사고 싶어요 '
          },
        ],
    }],
    imagePaths: [],
    addPostLoading: false,
    addPostData: null,
    addPostError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';


export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

const dummyPost = (data) => ({
    id: 2,
    content: data,
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
});

const reducer = (state = initilalState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostError: null,
            };
        case ADD_POST_SUCCESS:
            console.log('action.data.......', action.data)
            return {
                ...state,
                addPostLoading: false,
                mainPosts: [dummyPost(action.data), ...state.mainPosts],
            };
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error,
            };
        default:
            return state;
    };
};

export default reducer;
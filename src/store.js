import {createStore} from 'redux';

const initialState = {
    players : [{
        id: 1,
        name: "Ratatösk",
        photo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/AM_738_4to_Ratatoskr.png"
    },{
        id: 2,
        name: "Níðhöggr",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Nidhogg.png/500px-Nidhogg.png"
    },{
        id: 3,
        name: "Jörmundgander",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Johann_Heinrich_Fussli-Tor_and_Jormundgandr.jpg/800px-Johann_Heinrich_Fussli-Tor_and_Jormundgandr.jpg"
    },{
        id: 4,
        name: "Veðrfölnir",
        photo: "https://upload.wikimedia.org/wikipedia/commons/9/92/AM_738_4to_Vedrfolnir.png"
    },{
        id: 5,
        name: "Tanngnjóstr",
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Ed0012.jpg"
    },{
        id: 6,
        name: "Tanngrisnir",
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Ed0012.jpg"
    },{
        id: 7,
        name: "Hugin",
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Odin_hrafnar.jpg"
    },{
        id: 8,
        name: "Munin",
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Odin_hrafnar.jpg"
    },{
        id: 9,
        name: "Hildisvíni",
        photo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Hyndla_og_Freia_by_Frølich.jpg"
    },{
        id: 10,
        name: "Heiðrún",
        photo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Treated_NKS_heidrun.jpg"
    },{
        id: 11,
        name: "Gullinbursti",
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Freyr_by_Johannes_Gehrts.jpg"
    },{
        id: 12,
        name: "Garm",
        photo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Hel_%281889%29_by_Johannes_Gehrts.jpg"
    },{
        id: 13,
        name: "Eikþyrnir",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/de/AM_738_4to_Eikthyrnir_Heidrun.jpg"
    },{
        id: 14,
        name: "Dáinn",
        photo: "https://upload.wikimedia.org/wikipedia/commons/0/09/AM_738_4to_stags_of_Yggdrasill.png"
    },{
        id: 15,
        name: "Dvalinn",
        photo: "https://upload.wikimedia.org/wikipedia/commons/0/09/AM_738_4to_stags_of_Yggdrasill.png"
    },{
        id: 16,
        name: "Duneyrr",
        photo: "https://upload.wikimedia.org/wikipedia/commons/0/09/AM_738_4to_stags_of_Yggdrasill.png"
    },{
        id: 17,
        name: "Duraþrór",
        photo: "https://upload.wikimedia.org/wikipedia/commons/0/09/AM_738_4to_stags_of_Yggdrasill.png"
    },{
        id: 18,
        name: "Auðumbla",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Manuscript_Audhumla.jpg/800px-Manuscript_Audhumla.jpg"
    },{
        id: 19,
        name: "Fenrir",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Fenrir_bound_manuscript_image.jpg/1920px-Fenrir_bound_manuscript_image.jpg"
    },{
        id: 20,
        name: "Geri",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Odhin_thron.jpg/800px-Odhin_thron.jpg"
    },{
        id: 21,
        name: "Freki",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Odhin_thron.jpg/800px-Odhin_thron.jpg"
    },{
        id: 22,
        name: "Sköll",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/The_Wolves_Pursuing_Sol_and_Mani.jpg/1024px-The_Wolves_Pursuing_Sol_and_Mani.jpg"
    },{
        id: 23,
        name: "Hati",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/The_Wolves_Pursuing_Sol_and_Mani.jpg/1024px-The_Wolves_Pursuing_Sol_and_Mani.jpg"
    }],
    headline : [],
    alternate : []
}

const reducerCoach = (state = initialState, action) => {
    //console.log(action)
    if (action.type === 'ADD_HEADLINE') {
        return{
            ...state,
            headline: state.headline.concat(action.jarl),
            players: state.players.filter(j => j.id !== action.jarl.id)
        }
    }
    if (action.type === 'ADD_ALTERNATE') {
        return{
            ...state,
            alternate: state.alternate.concat(action.jarl),
            players: state.players.filter(j => j.id !== action.jarl.id)
        }
    }
    if (action.type === 'DELETE_HEADLINE') {
        return{
            ...state,
            headline: state.headline.filter(j => j.id !== action.jarl.id),
            players: state.players.concat(action.jarl)
        }
    }
    if (action.type === 'DELETE_ALTERNATE') {
        return{
            ...state,
            alternate: state.alternate.filter(j => j.id !== action.jarl.id),
            players: state.players.concat(action.jarl)
        }
    }
    return state
}

export default createStore(reducerCoach)
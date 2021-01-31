import React, {useEffect, createRef} from 'react';
import {connect} from 'react-redux';

const Players = ({players, addHeadline, addAlternate}) => {

    const gridPlayers = createRef();
    
    useEffect(() => {
        setScrollContainer()
        document.addEventListener('click', setScrollContainer)
        // eslint-disable-next-line
    }, [])
    
    const setScrollContainer = (desktop = true) => {
        let container = gridPlayers.current
        if (container) {
            const generatedGrid = () => {
                let items = container.getElementsByClassName('jarl')
                let itemsLength = items.length
                let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1
    
                const getWidth = () => {
                    let n = bp + (itemsLength > bp ? 0.3 : 0)
                    return (itemsLength / n ) * 100
                }
                return `
                    display: grid;
                    grid-template-columns: repeat(${itemsLength}, 225px);
                    grid-gap: 1rem;
                    width: ${getWidth()}%;    
                `
            }
            let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
            container.setAttribute('style', styles)
        }
    }

    return(
        <section>
            <h2>Players</h2>
            <div className="players-container">
                <div ref={gridPlayers} onClick={() => setScrollContainer(this)}>
                    {
                        players.map(j =>(
                            <article className="jarl" key={j.id}>
                                <img src={j.photo} alt={j.name}/>
                                <h3>{j.name}</h3>
                                <div>
                                    <button onClick={() => addHeadline(j)}>Headline</button>
                                    <button onClick={() => addAlternate(j)}>Alternate</button>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    players: state.players
})

const mapDispatchToProps = dispatch => ({
    addHeadline(jarl){
        dispatch({
            type: "ADD_HEADLINE",
            jarl
        })
    },
    addAlternate(jarl){
        dispatch({
            type: "ADD_ALTERNATE",
            jarl
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Players)
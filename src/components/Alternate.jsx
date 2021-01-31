import React from 'react';
import {connect} from 'react-redux';

const Alternate = ({alternate, deleteAlternate}) => (
    <section>
        <h2>Suplentes</h2>
        <div className="reserve">
            {
                alternate.map(j => (
                    <article className="alternate" key={j.id}>
                        <div>
                            <img src={j.photo} alt={j.name}/>
                            <button onClick={() => deleteAlternate(j)}>X</button>
                            <p>{j.name}</p>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)
const mapStateToProps = state => ({
    alternate: state.alternate
})

const mapDispatchToProps = dispatch => ({
    deleteAlternate(jarl){
        dispatch({
            type: 'DELETE_ALTERNATE',
            jarl
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Alternate);

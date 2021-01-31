import React from 'react';
import {connect} from 'react-redux';
import vigrid from '../vigrid.svg';

const Headline = ({headline, deleteHeadline}) => (
    <section>
        <h2>Titulares</h2>
        <div className="vigrid">
            {
                headline.map(j => (
                    <article className="headline" key={j.id}>
                        <div>
                            <img src={j.photo} alt={j.name}/>
                            <button onClick={() => deleteHeadline(j)}>X</button>
                            <p>{j.name}</p>
                        </div>
                    </article>
                ))
            }
            <img src={vigrid} alt="field"/>
        </div>
    </section>
)
const mapStateToProps = state => ({
    headline: state.headline
})

const mapDispatchToProps = dispatch => ({
    deleteHeadline(jarl){
        dispatch({
            type: 'DELETE_HEADLINE',
            jarl
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Headline);

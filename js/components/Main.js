import React from 'react';
import {Link} from 'react-router-dom';

const Main = () => {
    let stats = {
        bags: 7,
        orgs: 5,
        cols: 10
    }

    return (
        <section className='main'>
            <section className='main-stats'>
                <article className='main-stat'>
                    <h4><span>{stats.bags}</span>Oddanych worków</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        In, eaque! 
                        Numquam repellat tempora voluptas optio!</p>
                </article>
                <article className='main-stat'>
                    <h4><span>{stats.orgs}</span>Wspartych organizacji</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eaque! 
                    Numquam repellat tempora voluptas optio!</p>
                </article>
                <article className='main-stat'>
                    <h4><span>{stats.cols}</span>Zorganizowanych zbiórek</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eaque! 
                        Numquam repellat tempora voluptas optio!</p>
                </article>
            </section>

            <section className='main-guides'>
                <h3>Wystarczą 4 proste kroki</h3>
                <article className='main-guide'>
                    <i></i>
                    <p>Wybierz rzeczy</p>
                    <p className='smaller'>Ubrania, zabawki, sprzęt</p>
                </article>
                <article className='main-guide'>
                    <i></i>
                    <p>Spakuj je</p>
                    <p className='smaller'>Skorzystaj z worków</p>
                </article>
                <article className='main-guide'>
                    <i></i>
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <p className='smaller'>Wybierz zaufane miejsce</p>
                </article>
                <article className='main-guide'>
                    <i></i>
                    <p>Zamów kuriera</p>
                    <p className='smaller'>Kurier przyjedzie w dogodnym terminie</p>
                </article>
            </section>

            <Link to='/register'>Załóz konto</Link>
        </section>
    )
}

export default Main;
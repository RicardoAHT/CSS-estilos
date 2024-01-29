import React from 'react'

const Accordion = () => {
  return (
    <>
        <h3 className='h3'>.accordion</h3>
        <section className="accordion">
            <details className="accordion__details__container">
                <summary className='accordion__summary__level1'>Acordeon </summary>
                <p className='accordion__p__level1'>Este es un parrafo</p>
            </details>
            <details className="accordion__details__container">
                <summary className='accordion__summary__level1'>Acordeon lista</summary>
                <ul className="accordion__ul__level1">
                    <li>Elemento lista 1</li>
                    <li>Elemento lista 2</li>
                    <li>Elemento lista 3</li>
                </ul>
            </details>
            <details className="accordion__details__container">
                <summary className='accordion__summary__level1'>Acordeones Multiples</summary>
                    <details>
                        <summary className='accordion__summary__level2'>Sub categoria 1</summary>
                            <ul className="accordion__ul__level2">
                                <li>Elemento lista 1</li>
                                <li>Elemento lista 2</li>
                            </ul>
                    </details>
                    <details>
                        <summary className='accordion__summary__level2'>Sub categoria 1</summary>
                            <ul className="accordion__ul__level2">
                                <li>Elemento lista 1</li>
                                <li>Elemento lista 2</li>
                            </ul>
                    </details>

            </details>

        </section>
    </>
  )
}

export default Accordion

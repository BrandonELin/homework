import SwAPI from './services/sw-api';
import Ship from './Ship.js'

export default function Ships(){

    const { starships, isPending } = SwAPI();

    return(
        <>
            <div>{isPending && <div>Loading... </div>}</div>

            <div className='fleet'>
                {starships && (
                    starships.map((starship, index) => {
                        console.log({starship})
                        return <Ship key={index} starship={starship}/>
                    })
                )}
            </div>
        </>        
    )
}

import Conteur from "../component/Conteur";
import Header from "../component/Header";
import Info from "../component/Info";
import Toggler from "../component/Toggler";

export default function Accueil(){
    return <main>

    <div>

      Je m appelle James

    </div>

<Toggler titre = "james" visible>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos amet corporis facere unde consectetur dolor, repudiandae ut expedita impedit illum laborum a praesentium dignissimos asperiores voluptatibus nam est repellat reiciendis.
</Toggler>
    <Conteur/>
    <Conteur depart = {50}/>

    <Info text = "James k jkk kjfk kjsk j kf jk"/>
    <Info/>
    <Info/>

    </main>


}
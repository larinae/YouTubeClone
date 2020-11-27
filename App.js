import React from "react";
import Home from "./components/Home";
import {Route, Switch} from 'react-router-dom';
import Player from './components/Player';
import NotFound from './components/NotFound';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: [
                {title: "Швеция. Как жить в кайф в стране с плохим климатом. Большой Выпуск.", youtube_link: 'BNdJaetPrlg' },
                {title: "Япония, которая взрывает мозг. Большой выпуск.", youtube_link: 'Gb0TQ7VeApY' },
                {title: "Дубай. Экскурсия по богатой жизни. Большой выпуск.", youtube_link: 'p0ggtmXghPg' },
                {title: "Саудовская Аравия. Нефть, туризм и большие перемены. Большой Выпуск.", youtube_link: 'ea5uxRmRe8Y' },
                {title: "Австралия, которую вы не знаете. Большой выпуск.", youtube_link: 'tVTT95C8J4o' },
                {title: "Исландия на автомобиле. Большой выпуск.", youtube_link: 'wb84vvYSPEU' },
                {title: "Фарерские острова - рай интроверта. Большой выпуск.", youtube_link: 'HF1dGDQO6Kc' },
                {title: "Круиз на самых больших лайнерах в мире. Большой выпуск.", youtube_link: 'H76pEfqywAc' },
                {title: "Как поймать северное сияние. Ледяной отель. Большой выпуск.", youtube_link: 'xuqJL70LEOY'}
            ]
        }
    }

    render() {
        return (
            <div>
                <main>
                    <Switch>
                        <Route exact path="/" component={Home}/>

                        <Route exact path="/video/:youtube_link"
                               render={(props) => <Player {...props} video={this.state.video}/>}/>

                        <Route exact path="*" component={NotFound}/>
                    </Switch>
                </main>
            </div>
        );
    }
}


export default App;
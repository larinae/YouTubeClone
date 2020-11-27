import React, {Component} from 'react';
import Youtube from "./YouTube";

class Player extends Component {

    bindYoutubeLink = (props) => {
        let video = props.video.find((video) => {
            return video.youtube_link === props.match.params.youtube_link;
        });
        if (video !== null) {
            this.currentLink = video.youtube_link;
        } else {
            this.currentLink = '';
        }
        this.texts = video.title;

    }

    UNSAFE_componentWillMount() {
        this.bindYoutubeLink(this.props);
    }

    render() {
        return (
            <div>
                {this.currentLink !== "" ?
                    <Youtube
                        video={this.currentLink}
                        width="900"
                        height="500"
                        text={this.texts}
                    />
                    : ''}
            </div>
        )
    }
}

export default Player;
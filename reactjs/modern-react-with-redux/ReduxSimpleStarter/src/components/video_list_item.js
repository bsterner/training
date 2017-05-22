import React from 'react';

const VideoListItem = ({video}) => {
    // {video} is ES6 syntax and is equivalent to the following line
    // const video = props.video;

    const imageUrl = video.snippet.thumbnails.default.url;

    // We get bootstrap for free!
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <image className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
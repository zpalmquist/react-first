import React from "react";

class NewsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { articles: [], topic: props.topic }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.articles}
                </ul>
            </div>
        )
    }

    getArticles() {
        fetch(process.env.NY_TIMES_URL`.${this.props.topic}`)
    }
}
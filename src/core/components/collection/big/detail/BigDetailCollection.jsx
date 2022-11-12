import React, {Component} from 'react';
import cl from "./_BigDetailCollection.module.scss";
import CollectionHeadDetail from "../../core/components/collection_head/collection_head/detail/CollectionHeadDetail";
import CourseMiniList from "../../../course/mini/list/many/CourseMiniList";
import CollectionDescription from "../../core/components/description/CollectionDescription";
import Wallpaper from "../../../../ui/image/wallpaper/Wallpaper";


class BigDetailCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: props.collection,
            description: props.collection.description,
            wallpaper: props.collection.wallpaper,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.collection.path !== this.state.collection.path) {

            this.setState({
                collection: this.props.collection,
                description: this.props.collection.description,
                wallpaper: this.props.collection.wallpaper
            })
        }
    }

    _setDescription = (newDescription) => {
        this.setState({
            description: newDescription
        })
    }

    _setWallpaper = (newWallpaper) => {
        this.setState({
            wallpaper: newWallpaper
        })
    }

    render() {
        const {collection, description, wallpaper} = this.state;
        const {addedCollectionList, setAddedCollectionList, className, ...props} = this.props;

        return (
            <div className={className} {...props}>
                <Wallpaper image={wallpaper}/>
                <div className={cl.wrapper}>
                    {description &&
                        <CollectionDescription className={cl.description} description={description}/>
                    }
                    <CollectionHeadDetail collection={collection}
                                          description={description}
                                          setDescription={this._setDescription}
                                          wallpaper={wallpaper}
                                          setWallpaper={this._setWallpaper}
                                          addedCollectionList={addedCollectionList}
                                          setAddedCollectionList={setAddedCollectionList}/>
                    <CourseMiniList className={cl.courses} courses={collection.courses}/>
                </div>
            </div>
        );
    }
}


export default BigDetailCollection;
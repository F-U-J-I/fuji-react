import React, {Component} from 'react';
import cl from "./_CollectionBigDetail.module.scss";
import {getImage} from "../../../../api/mainAPI";
import CollectionHeadDetail from "../../core/components/collection_head/collection_head/detail/CollectionHeadDetail";
import CourseMiniList from "../../../course/mini/list/CourseMiniList";
import CollectionDescription from "../../core/components/description/CollectionDescription";


class CollectionBigDetail extends Component {
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
            <div className={[cl.block, className].join(" ")} {...props}>
                {wallpaper !== null &&
                    <img className={cl.wallpaper} src={getImage(wallpaper)} alt="wallpaper"/>
                }
                <div className={cl.wrapper}>
                    {description &&
                        <CollectionDescription className={cl.description} description={description}/>
                    }
                    <CollectionHeadDetail className={cl.collectionHead}
                                          collection={collection}
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


export default CollectionBigDetail;
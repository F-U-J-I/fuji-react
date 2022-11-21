import React, {Component} from 'react';
import cl from './_ModalAddCourseToCollection.module.scss'
import ModalWrapper from "../core/components/modal-wrapper/ModalWrapper";
import InputSearch from "../../../../../main/core/ui/search/core/components/input_search/InputSearch";
import CollectionItem from "./core/components/collection_item/CollectionItem";
import ButtonPurpleBigFR from "../../../../ui/button/radius/fill/purple/big/ButtonPurpleBigFR";
import {
    addCourseInCollection,
    getCollectionsWithCourses,
    popCourseInCollection
} from "../../../../../main/core/api/courseAPI";
import EmptyList from "../../../empty/EmptyList";

class ModalAddCourseToCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: [],
            pathCollections: [],
            addedCollectionsPath: [],
            removedCollectionsPath: [],
            searchQuery: '',
            searchCollections: [],
            error: false,
        }
    }

    componentDidMount() {
        this._setData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.searchQuery !== prevState.searchQuery)
            this._setSearchCollections()
    }

    _setData() {
        this._getCollectionsWithCourses()
    }

    setSearchQuery(query) {
        this.setState({searchQuery: query})
    }

    _getCollectionsWithCourses() {
        getCollectionsWithCourses(this.props.path).then(
            r => {
                this.setState({
                    pathCollections: r,
                })
                this._getCollections(r)
            },
            e => {
                this.setState({error: e.status})
            }
        )
    }

    _getCollections(pathCollections) {
        let pathCollectionsLocal = pathCollections;
        if (pathCollectionsLocal === undefined)
            pathCollectionsLocal = this.state.pathCollections

        const newCollectionList = [];
        const pathUser = sessionStorage.getItem('path')
        for (let collection of this.props.addedCollections) {
            if (collection.author.path === pathUser)
                newCollectionList.push({
                    path: collection.path,
                    title: collection.title,
                    imageUrl: collection.image_url,
                    isAdded: pathCollectionsLocal.includes(collection.path) > 0,
                });
        }
        this.setState({collections: newCollectionList})
        this._setSearchCollections(newCollectionList)
    }

    _setSearchCollections(collections) {
        let collectionsLocal = collections;
        if (collections === undefined)
            collectionsLocal = this.state.collections
        this.setState({
            searchCollections: collectionsLocal.filter(collection => collection.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
        })
    }

    handleOnClickCollection(path, isAdded) {
        if (isAdded) {
            if (this.state.pathCollections.indexOf(path) !== -1)
                this.state.removedCollectionsPath.push(path);
            else
                this.state.addedCollectionsPath.splice(this.state.addedCollectionsPath.indexOf(path), 1)
        } else {
            if (this.state.pathCollections.indexOf(path) !== -1)
                this.state.removedCollectionsPath.splice(this.state.removedCollectionsPath.indexOf(path), 1)
            else
                this.state.addedCollectionsPath.push(path);
        }
    }

    async handleOnClickSave() {
        let quantityInCollection = this.props.quantityInCollection
        const promisesAdded = this.state.addedCollectionsPath.map(item =>
            addCourseInCollection(this.props.path, item).then(
                () => {
                    this.props.setQuantityInCollectionLocal(++quantityInCollection)
                }
            )
        )
        const promisesRemoved = this.state.removedCollectionsPath.map(item =>
            popCourseInCollection(this.props.path, item).then(
                () => {
                    this.props.setQuantityInCollectionLocal(--quantityInCollection)
                    // this.setState({quantityInCollection: this.state.quantityInCollection - 1})
                }
            )
        )

        await Promise.all(promisesAdded);
        await Promise.all(promisesRemoved);
        this.props.onClick(quantityInCollection)
    }

    render() {
        const {searchCollections, searchQuery} = this.state;
        const {
            addedCollections,
            setQuantityInCollectionLocal,
            quantityInCollection,
            onClick,
            setIsVisible,
            className,
            ...props
        } = this.props;

        return (
            <ModalWrapper className={[cl.wrapper, className].join(" ")}
                          setIsVisible={setIsVisible}
                          title='Добавление курса'
                          titleClassName={cl.titleWrapper}
                          crossClassName={cl.cross}
                          {...props}>
                <div className={cl.content}>
                    <InputSearch value={searchQuery} onChange={e => this.setSearchQuery(e.target.value)}
                                 placeHolder='Поиск подборок' className={cl.search}/>
                    <div className={cl.collections}>
                        {searchCollections.length
                            ? <CollectionsList collections={searchCollections}
                                               onClickItem={this.handleOnClickCollection.bind(this)}/>
                            : <EmptyList description='Таких подборок не найдено :(' className={cl.empty}/>
                        }
                    </div>
                </div>
                <div className={cl.navigation}>
                    <ButtonPurpleBigFR type='button' title='Сохранить' onClick={this.handleOnClickSave.bind(this)}
                                       className={cl.navigationButton}/>
                </div>
            </ModalWrapper>
        );
    }
}

const CollectionsList = ({collections, onClickItem}) => {
    return (
        <>
            {collections.map(item =>
                <CollectionItem key={item.path}
                                path={item.path}
                                title={item.title}
                                preview={item.imageUrl}
                                isAdded={item.isAdded}
                                onClick={onClickItem}
                                className={cl.collectionItem}/>
            )}
        </>
    );
}

export default ModalAddCourseToCollection;
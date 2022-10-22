import React, {Component} from 'react';
import clCommon from "../_CollectionHead.module.scss";
import cl from "./_CollectionHeadDetail.module.scss";
import CollectionDefault from "../../default/CollectionDefault";
import MakeRating from "../../make_rating/MakeRating";
import CollectionTracking from "../../tracking/CollectionTracking";


class CollectionHeadDetail extends Component {
    constructor(props) {
        super(props);
        // collection, addedCollectionList, setAddedCollectionList, className, ...props
        this.state = {
            collection: props.collection,
            rating: props.collection.rating,
            membersAmount: props.collection.members_amount,
            isAdded: props.collection.is_added,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.collection.path !== this.state.collection.path) {
            this.setState({
                collection: this.props.collection,
                rating: this.props.collection.rating,
                membersAmount: this.props.collection.members_amount,
                isAdded: this.props.collection.is_added,
            })
        }
        console.log(`==> ${this.state.isAdded}`)
    }

    _setRating = (newRating) => {
        this.setState({rating: newRating})
    }

    _setMembersAmount = (newMembersAmount) => {
        this.setState({membersAmount: newMembersAmount})
    }

    _setIsAdded = (bool) => {
        this.setState({isAdded: bool})
    }

    render() {
        const {addedCollectionList, setAddedCollectionList, className, ...props} = this.props;
        const {collection, rating, membersAmount, isAdded} = this.state;
        // console.log(membersAmount)
        return (
            <div className={[clCommon.collectionHead, className].join(" ")} {...props}>
                <CollectionDefault path={collection.path}
                                   title={collection.title}
                                   image_url={collection.image_url}
                                   author={collection.author}
                                   rating={rating}
                                   isAdded={isAdded}
                                   setIsAdded={this._setIsAdded}
                                   countRatings={collection.count_ratings}
                                   membersAmount={membersAmount}
                                   setMembersAmount={this._setMembersAmount}
                                   addedCollectionList={addedCollectionList}
                                   setAddedCollectionList={setAddedCollectionList}/>

                <div className={cl.options}>
                    <div className={cl.rating}>
                        <CollectionTracking membersAmount={collection.members_amount}/>
                        <MakeRating className={cl.ratingButton} path={collection.path} grade={collection.grade}
                                    rating={rating} setRating={this._setRating}/>
                    </div>
                </div>

            </div>
        );
    }
}

// const CollectionHeadDetail = ({collection, addedCollectionList, setAddedCollectionList, className, ...props}) => {
//     const [rating, setRating] = useState(collection.rating)
//     console.log(rating)
//     return (
//         <div className={[clCommon.collectionHead, className].join(" ")} {...props}>
//             <CollectionDefault path={collection.path}
//                                title={collection.title}
//                                image_url={collection.image_url}
//                                author={collection.author}
//                                rating={rating}
//                                is_added={collection.is_added}
//                                count_ratings={collection.count_ratings}
//                                addedCollectionList={addedCollectionList}
//                                setAddedCollectionList={setAddedCollectionList}/>
//             <div className={cl.options}>
//                 <div className={cl.rating}>
//                     <pre className={cl.members}>
//                         <Text12B className={cl.membersText}>{collection.members_amount} </Text12B>
//                         <Text12M className={cl.membersText}>следящих</Text12M>
//                     </pre>
//                     <MakeRating className={cl.ratingButton}
//                                 path={collection.path}
//                                 grade={collection.grade}
//                                 rating={rating}
//                                 setRating={setRating} />
//                 </div>
//             </div>
//
//         </div>
//     );
// };

export default CollectionHeadDetail;
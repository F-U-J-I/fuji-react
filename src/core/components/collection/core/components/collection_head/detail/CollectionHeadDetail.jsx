import React, {useState} from 'react';
import clCommon from "../_CollectionHead.module.scss";
import cl from "./_CollectionHeadDetail.module.scss";
import CollectionDefault from "../../default/CollectionDefault";
import Text12B from "../../../../../../ui/text/12/bold/Text12B";
import Text12M from "../../../../../../ui/text/12/medium/Text12M";
import MakeRating from "../../make_rating/MakeRating";


const CollectionHeadDetail = ({collection, addedCollectionList, setAddedCollectionList, className, ...props}) => {
    const [rating, setRating] = useState(collection.rating)
    return (
        <div className={[clCommon.collectionHead, className].join(" ")} {...props}>
            <CollectionDefault path={collection.path}
                               title={collection.title}
                               image_url={collection.image_url}
                               author={collection.author}
                               rating={rating}
                               is_added={collection.is_added}
                               count_ratings={collection.count_ratings}
                               addedCollectionList={addedCollectionList}
                               setAddedCollectionList={setAddedCollectionList}/>
            <div className={cl.options}>
                <div className={cl.rating}>
                    <pre className={cl.members}>
                        <Text12B className={cl.membersText}>{collection.members_amount} </Text12B>
                        <Text12M className={cl.membersText}>следящих</Text12M>
                    </pre>
                    <MakeRating className={cl.ratingButton}
                                path={collection.path}
                                grade={collection.grade}
                                rating={rating}
                                setRating={setRating} />
                </div>
            </div>

        </div>
    );
};

export default CollectionHeadDetail;
import React from 'react';
import clCommon from "../_CollectionHead.module.scss";
import cl from "./_CollectionHeadDetail.module.scss";
import CollectionDefault from "../../default/CollectionDefault";
import Text12B from "../../../../../../ui/text/12/bold/Text12B";
import Text12M from "../../../../../../ui/text/12/medium/Text12M";
import MakeRating from "../../make_rating/MakeRating";


const CollectionHeadDetail = ({collection, addedCollectionList, setAddedCollectionList, className, ...props}) => {
    return (
        <div className={[clCommon.collectionHead, className].join(" ")} {...props}>
            <CollectionDefault collection={collection}
                               addedCollectionList={addedCollectionList}
                               setAddedCollectionList={setAddedCollectionList}/>
            <div className={cl.options}>
                <div className={cl.rating}>
                    <pre className={cl.members}>
                        <Text12B className={cl.membersText}>{collection.members_amount} </Text12B>
                        <Text12M className={cl.membersText}>следящих</Text12M>
                    </pre>
                    <MakeRating count_ratings={collection.count_ratings} className={cl.ratingButton}/>
                </div>
            </div>

        </div>
    );
};

export default CollectionHeadDetail;
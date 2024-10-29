import "../css/Tree.css";
import {useState} from "react";

const Tree = (tree) => {
    const[pruned, PruneTree] = useState(false);

    const doTreeJob = () => {
        PruneTree(true);
    };
    
    return (
        <section className="tree">
            <h3 className={pruned?"pruned":""}>{tree.name}</h3>
            <img src={tree.image} alt={tree.name} />
            <button onClick ={doTreeJob}>Prune Tree</button>
        </section>
    );
};

export default Tree;
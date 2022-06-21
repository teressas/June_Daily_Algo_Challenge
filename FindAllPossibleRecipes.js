/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
    let g = new Map(),
        n = recipes.length,
        sup = new Set(supplies);
    // console.log("sup1",sup);
    // loop through recipes and create a hash map to set the recipe as the key and ingredients as the value
    for (let i = 0; i < n; i++) {
        g.set(recipes[i], ingredients[i]);
    }
    // console.log("g",g)
    let q = [...sup],
        res = new Set();
    // console.log("q",q)
    while (q.length) {
        operate(g, sup);
        let curr = q.shift(),
            next = g.get(curr) || [];
        // console.log(curr, next)
        for (const child of next) {
            // console.log("child",child)
            if (sup.has(child)) continue;
            sup.add(child);
            q.push(child);
            // console.log("sup2", sup, "q2", q)
        }
    }
    for (const e of sup) {
        if (g.has(e)) res.add(e);
    }
    console.log("res", res);
    return [...res];
};

const operate = (g, sup) => {
    for (const [s, a] of g) {
        // console.log("s,a",[s,a])
        if (canMake(a, sup)) sup.add(s);
        // console.log("sup3",sup)
    }
}

const canMake = (ingredient, sup) => {
    for (const e of ingredient) {
        console.log("e", e)
        if (!sup.has(e)) return false;
    }
    return true;
}

// recipes = ["bread","sandwich"], 
// ingredients = [["yeast","flour"],["bread","meat"]], 
// supplies = ["yeast","flour","meat"]

recipes = ["bread"],
ingredients = [["yeast", "flour"]],
supplies = ["yeast", "flour", "corn"]
// ["bread"]

// recipes = ["bread", "sandwich", "burger"],
// ingredients = [["yeast", "flour"], ["bread", "meat"], ["sandwich", "meat", "bread"]],
// supplies = ["yeast", "flour", "meat"]
// ["bread","sandwich","burger"]
console.log(findAllRecipes(recipes, ingredients, supplies));





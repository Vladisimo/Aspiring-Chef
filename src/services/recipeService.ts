import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Recipe Template
export interface Recipe {
    id: number
    difficulty: string
    name: string
    prepTime: number
    serves: number
    kcal: number
    ingredients: string[]
    method: string[]
    favorite: boolean
}

// Only start values
// Should only get read by recipeService
export const RECIPES: Recipe[] = [
    {
        id: 1, difficulty: 'Easy',
        name: 'Sausage & Mushroom pot pies',
        prepTime: 52,
        serves: 2,
        kcal: 757,
        ingredients: ['2 tsp olive oil',
            '1 small onion, chopped',
            '6 pork sausages',
            '250g chestnut mushroom, halved',
            '1 tbsp wholegrain mustard',
            '4 tbsp low-fat creme fraiche',
            'small bunch parsly, chopped',
            '85g ciabatta, torn into small chunks'],
        method: ['Heat half the oil in a large frying pan. Add the onion and cook for 5 mins until softened, then push to one side. Squeeze the meat from the sausages and roll into balls. Add to the pan and fry for 5 mins until golden. Add the mushrooms and cook for 5 mins more until softened.',
            'Season, then stir in the mustard, crème fraîche and 4 tbsp water. Bubble for 2 mins, then remove from the heat and scatter in the parsley.',
            'Heat oven to 200C/180C fan/gas 6. Transfer sausage mixture to 2 small pie dishes or 1 large baking dish. Toss the ciabatta in the remaining oil, scatter over the top of the pies and bake for 20 mins until golden and bubbling.'],
        favorite: false
    },

    {
        id: 2,
        difficulty: 'Easy',
        name: 'Jacket potato with whipped feta & sumac',
        prepTime: 85,
        serves: 1,
        kcal: 420,
        ingredients: ['1 baking potato',
            '2 tsp olive oil',
            '1/2 tsp garlic salt',
            '50g feta',
            '50g Greek yogurt',
            '1 roasted red peppers from a jar (about 25g), finely chopped',
            '1/2 tsp sumac',
            'few basil leaves, to serve (optional)'],
        method: ['Heat oven to 220C/200C fan/ gas 6. Prick the potato all over with a fork and bake for 1 hr until it is golden outside and soft inside. Mix 1 tsp olive oil with the garlic salt. Cut a deep cross into the top of the jacket, drizzle the garlic oil into the cross and rub it all over the outside. Return to the oven and bake for 15 mins more until the edges are golden and crispy.',
            'Meanwhile, crumble the feta into a bowl, add the yogurt and whisk together until creamy. Stir in the red pepper with a good grind of black pepper and spoon the whipped feta into the jacket. Sprinkle with the sumac, drizzle over the remaining 1 tsp olive oil and scatter a few torn basil leaves on top, if you like.'],
        favorite: false
    },

    {
        id: 3,
        difficulty: 'Medium',
        name: 'Jacket potato with whipped feta & sumac',
        prepTime: 100,
        serves: 4,
        kcal: 550,
        ingredients: ['400g floury potatoes, such as King Edwards',
            '600g swede, peeled',
            '4 tbsp olive oil',
            '1 tsp chilli flakes',
            '100g "00" flour, plus extra for dusting',
            '30g parmesan (or vegetarian alternative), grated, plus extra to serve',
            '100g butter',
            'small pack sage leaves picked'],
        method: ['Heat oven to 220C/200C fan/gas 7. Cut the potato and swede into equal- sized chunks, drizzle with 2 tbsp of the oil, season and roast for 50 mins or until completely soft. Leave to cool slightly, then pulse in a food processor until broken down. Add the chilli flakes, flour, Parmesan and some seasoning, then pulse again to form a sticky dough.',
            'Bring a large pan of salted water to the boil in which to cook your gnocchi later. Flour your hands and divide the dough in three. On a floured surface, roll each portion into a sausage about 1cm in diameter. Using the back of a table knife, cut into pieces 2.5cm in length – this gives a tapered edge to the pieces of gnocchi.',
            'Working in batches, cook the gnocchi in the water for 30 secs or until they rise to the surface. Remove with a slotted spoon and drain on a tray lined with kitchen paper. Can be made to this stage up to 4 hrs ahead and kept in the fridge.',
            'Turn the oven to its lowest setting and heat the remaining oil in a large frying pan over a medium heat. Fry the gnocchi in batches for 2 mins on each side until browned, then keep warm in the oven.',
            'Melt the butter in the pan, add the sage leaves and fry until crisp. Divide the gnocchi between bowls then spoon over the crisped sage and buttery sauce. Serve with pepper and grated Parmesan.'],
        favorite: false
    },

    {
        id: 4,
        difficulty: 'Easy',
        name: 'Apple crumble sundae',
        prepTime: 20,
        serves: 4,
        kcal: 377,
        ingredients: ['4 tbsp butter',
            '4 Granny Smiths apples, cored and diced',
            '1 tsp ground cinnamon',
            '2 tbsp light brown sugar',
            '8 scoops vanilla ice cream',
            '2 ginger nuts biscuits, crushed'],
        method: ['In a small saucepan, melt the butter over a gentle heat and add the apples, cinnamon and sugar. Cook for 10 mins or until the apples have softened but still hold their shape.',
            'Split the mixture between four sundae glasses or bowls. Sit 2 scoops of ice cream on top of each, followed by the crushed biscuits. Serve while the apple mix is still warm.'],
        favorite: false
    },

    {
        id: 5,
        difficulty: 'Easy',
        name: 'One-pot chicken & mushroom risotto',
        prepTime: 50,
        serves: 4,
        kcal: 615,
        ingredients: ['60g butter',
            '1 large onion, finely chopped',
            '2 thyme sprigs, leaves picked',
            '250g pack chestnut mushrooms',
            '300g risotto rice',
            '1 and a half L of hot chicken stock',
            '200g cooked chicken, chopped into chunks',
            '50g grated parmesan, plus extra to serve (optional)',
            'small pack parsley, finaly chopped'],
        method: ['Heat the butter in a large pan over a gentle heat and add the onion. Cook for 10 mins until softened, then stir in the thyme leaves and mushrooms. Cook for 5 mins, sprinkle in the rice and stir to coat in the mixture.',
            'Ladle in a quarter of the stock and continue cooking, stirring occasionally and topping up with more stock as it absorbs (you may not need all the stock).',
            'When most of the stock has been absorbed and the rice is nearly cooked, add the chicken and stir to warm through. Season well and stir in the parmesan and parsley. Serve scattered with extra parmesan, if you like.'],            
        favorite: false
    },

    {
        id: 6,
        difficulty: 'Easy',
        name: 'Roasted aubergine & tomato curry',
        prepTime: 60,
        serves: 4,
        kcal: 331,
        ingredients: ['600g baby aubergines, sliced into rounds',
            '3 tbsp olive oil',
            '2 onions, finely sliced',
            '2 garlic cloves, crushed',
            '1 tsp garam masala',
            '1 tsp turmeric',
            '1 tsp ground coriander',
            '400ml can chopped tomatoes',
            '400ml can coconut milk',
            'pinch of sugar (optional)',
            '1/2 small pack coriander, roughly chopped',
            'rice or chapatis, to serve'],
        method: ['Heat oven to 200C/180C fan/gas 6. Toss the aubergines in a roasting tin with 2 tbsp olive oil, season well and spread out. Roast for 20 mins or until dark golden and soft.',
            'Heat the remaining oil in an ovenproof pan or flameproof casserole dish and cook the onions over a medium heat for 5-6 mins until softening. Stir in the garlic and spices, for a few mins until the spices release their aromas.',
            'Tip in the tomatoes, coconut milk and roasted aubergines, and bring to a gentle simmer. Simmer for 20-25 mins, removing the lid for the final 5 mins to thicken the sauce. Add a little seasoning if you like, and a pinch of sugar if it needs it. Stir through most of the coriander. Serve over rice or with chapatis, scattering with the remaining coriander.'],
        favorite: false
    },

    {
        id: 7,
        difficulty: 'Easy',
        name: 'Pearl barley, bacon & leek casserole',
        prepTime: 55,
        serves: 4,
        kcal: 589,
        ingredients: ['4 tbsp olive oil',
            '2 leeks, thickly sliced',
            '2 garlic cloves, finely chopped',
            '300g pearl barley',
            '4 carrots, cubed',
            '1 tbsp Dijon mustard, plus extra to serve',
            '1 L chicken stock',
            '300g Savoy cabbage, shredded',
            '200g lean bacon joint, cooked, chopped into small pieces'],
        method: ['Heat a large pan over a medium heat. Add the olive oil and cook the leeks for a few mins, then add the garlic and cook for just 1 min more.',
            'Add the pearl barley, carrots and mustard, then pour over the chicken stock. Season with plenty of ground black pepper and simmer for 20 mins, stirring occasionally. Add the cabbage with the bacon, and cook for 5-10 mins until cabbage is wilted and tender. Serve with extra Dijon mustard on the side.'],
        favorite: false
    },

    {
    id: 8,
    difficulty: 'Easy',
    name: 'Tuna sweet potato jackets',
    prepTime: 30,
    serves: 4,
    kcal: 238,
    ingredients: ['4 small sweet potatoes (about 200g each)',
        '185g can tuna in spring water, drained',
        '1/2 red onion, finely sliced',
        '1 small red chilli, deseeded and chopped',
        'juice 1 lime',
        '6 tbsp Greek yogurt',
        'handful coriander leaves'],
    method: ['Scrub the sweet potatoes and prick all over with a fork. Place on a microwaveable plate and cook on High for 18-20 mins, or until tender. Split in half and place each one, cut-side up, on a serving plate.',
        'Flake the drained tuna with a fork and divide between the sweet potatoes. Top with the red onion and chilli, then squeeze over the lime juice. Top with a dollop of yogurt and scatter over the coriander, to serve.'],
    favorite: false
    },

    {
    id: 9,
    difficulty: 'Easy',
    name: 'Smoked haddock & creamed corn curry',
    prepTime: 40,
    serves: 4,
    kcal: 332,
    ingredients: ['325g can sweetcorn',
        '1 tbsp vegetable oil',
        '1 onion, roughly chopped',
        '1 tbsp mild curry powder',
        '1 garlic clove, crushed',
        '1 x 50 sachet creamed coconut, chopped',
        '4 frozen smoked haddock fillets',
        'cooked rice, to serve'],
    method: ['In a blender, whizz the sweetcorn, along with any liquid from the can, into a rough purée and set aside.',
        'Heat the oil in a large lidded frying pan and cook the onion for 2-3 mins to soften. Add the curry powder and garlic and cook for 1 min more until fragrant.',
        'Tip the creamed coconut into the pan with 300ml water, stirring until the creamed coconut dissolves. Add the puréed sweetcorn and bring to the boil. Place the haddock fillets in the sauce, then reduce the heat to a simmer. Cover and cook for 20 mins, or until the fish is cooked through. Season and serve with rice.'],
    favorite: false
    },
    
    {
    id: 10,
    difficulty: 'Easy',
    name: 'Spicy sausage & bean one-pot',
    prepTime: 25,
    serves: 4,
    kcal: 524,
    ingredients: ['1 tbsp vegetable oil',
        '1 onion, thickly sliced',
        '8 Cucumberland sausages',
        '1 fat garlic clove, crushed',
        '2 x 400g cans kidney beans in chilli sauce',
        '2-3 spring curly  parsley, chopped'],
    method: ['Heat the oil in a large frying pan. Cook the onion and sausages over a fairly high heat for 8-10 mins, turning the sausages often so they brown all over.',
        'Add the garlic to the pan with the kidney beans and their sauce. Half-fill one of the cans with water, swirl and then add this to the pan. Stir everything together and bring to the boil. Turn down to simmer and cook for 10 mins, or until the sausages are cooked through. Season and sprinkle with the parsley.'],
    favorite: false
    },
    
]

// Recipe Manager
export class RecipeService {

    private recipes: Recipe[] = RECIPES;
    private readonly _recipes: BehaviorSubject<Recipe[]> = new BehaviorSubject(this.recipes);

    constructor() { }

    get recipes$() {
        return this._recipes.asObservable();
    }

    addRecipe(newRecipe: Recipe) {
        this.recipes.push(newRecipe);
        this.pushRecipeChanges();
    }

    deleteRecipe(id: number) {
        this.recipes = this.recipes.filter(recipe => id !== recipe.id);
        this.pushRecipeChanges();
    }

    toggleFavorite(idToToggle: number) {
        this.recipes.map((recipe: Recipe) => {
            if (recipe.id == idToToggle) {
                recipe.favorite = !recipe.favorite;
            }
        });
        this.pushRecipeChanges();
    }
    pushRecipeChanges() {
        this._recipes.next(this.recipes.slice(0));
    }
}

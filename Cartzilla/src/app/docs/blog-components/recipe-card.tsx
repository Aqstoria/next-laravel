import DocsComponentDemo from '@/components/docs/docs-component-demo'
import RecipeCard from '@/components/blog/recipe-card'

const RecipeCardDemo = () => {
  const code = `import RecipeCard from '@/components/blog/recipe-card'

export default function BlogPostNavigationDemo() {
  return (
    <RecipeCard
      href="#"
      image={{ src: '/img/home/grocery/recipes/01.jpg', alt: 'Image' }}
      title="Garden salad with a mix of lettuce, cucumber and tomato"
      timeToCook="30 min"
      difficulty="Easy"
      servings="4 por"
    />
  )
}`

  return (
    <section id="post-recipe" className="docs-section">
      <h4>Recipe card</h4>
      <DocsComponentDemo code={code}>
        <RecipeCard
          href="#"
          image={{ src: '/img/home/grocery/recipes/01.jpg', alt: 'Image' }}
          title="Garden salad with a mix of lettuce, cucumber and tomato"
          timeToCook="30 min"
          difficulty="Easy"
          servings="4 por"
        />
      </DocsComponentDemo>
    </section>
  )
}

export default RecipeCardDemo

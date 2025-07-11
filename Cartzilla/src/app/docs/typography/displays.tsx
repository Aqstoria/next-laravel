import DocsComponentDemo from '@/components/docs/docs-component-demo'

const DisplaysDemo = () => {
  const code = `<h1 className="display-1">Display 1</h1>
<h1 className="display-2">Display 2</h1>
<h1 className="display-3">Display 3</h1>
<h1 className="display-4">Display 4</h1>
<h1 className="display-5">Display 5</h1>
<h1 className="display-6">Display 6</h1>`

  return (
    <section id="type-displays" className="docs-section pb-sm-2 mb-5">
      <h4>Display headings</h4>
      <DocsComponentDemo code={code}>
        <h1 className="display-1">Display 1</h1>
        <hr />
        <h1 className="display-2">Display 2</h1>
        <hr />
        <h1 className="display-3">Display 3</h1>
        <hr />
        <h1 className="display-4">Display 4</h1>
        <hr />
        <h1 className="display-5">Display 5</h1>
        <hr />
        <h1 className="display-6 mb-0">Display 6</h1>
      </DocsComponentDemo>
    </section>
  )
}

export default DisplaysDemo

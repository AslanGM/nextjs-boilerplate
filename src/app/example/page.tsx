import { ExampleComponent } from '@components'
import Link from 'next/link'
import { ReactElement } from 'react'

export default function Example(): ReactElement {
    return (
        <main>
            <ExampleComponent />
            <Link href="/">Home</Link>
        </main>
    )
}

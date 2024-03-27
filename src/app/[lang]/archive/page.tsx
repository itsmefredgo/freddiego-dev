import { Locale } from '@/src/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Archive({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>{page.archive.title}</h1>
        <p className='text-gray-500'>{page.archive.description}</p>
      </div>
    </section>
  )
}

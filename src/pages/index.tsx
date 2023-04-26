import Image from 'next/image'
import {Inter} from 'next/font/google'
import {Donate} from "@/components/Donate";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div className="flex h-full flex-col bg-zinc-50 dark:bg-black scroll-auto min-h-screen ">
            <main
                className={`flex justify-center sm:px-8 ${inter.className}`}
            >
                <div className="px-4 w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
                    <article className="prose lg:prose-xl">

                        <div className="w-full h-96 relative mt-0 mb-20">
                            <Image src="/tahn_janna.jpg" alt="" fill className="object-cover"/>
                        </div>

                        <h1 className="mt-20">
                            Lieve Tahn
                        </h1>

                        <p>
                            Deze zondag stond onze wereld op zijn kop... Na een fantastische housewarming/verjaardag van
                            Janna gingen we allemaal met warme harten en een grote glimlachen naar huis. Niets kon ons
                            voorbereiden voor wat er komen zou. Het hart van onze lieve Tahn, onze spring in het veld,
                            de
                            definitie van energie en alles wat goed is in het leven, stond stil en startte niet meer..
                            er
                            zijn geen woorden voor deze situatie, het is zo absurd hoe je het ene moment samen staat de
                            dansen en knuffelen en lachen om minder dan 24 uur later alleen maar verdriet te voelen.
                            Alleen
                            maar ongeloof... Want hoe kan dit? Hoe kan ze er niet meer zijn? Dit is toch een hele hele
                            slechte grap? Maar dat is het helaas niet. Het is echt zo en dat is een besef dat iedere
                            minuut
                            weer meer binnen sijpelt... Daarbovenop komt nog eens dat deze wereld helaas om geld draait.
                            Het
                            is absurd hoe duur een uitvaart is en daarom deze crowdfunding. Zo kunnen we Janna een hart
                            onder de riem stoppen. Haar pijn zal het niet wegnemen maar het creëert meer ruimte om Tahn
                            het
                            afscheid te geven dat ze verdient.
                        </p>

                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl mt-6">
                                Alle hulp is welkom
                            </h2>

                            <p>Onze lieve Tahn Matulessy is afgelopen zondag onverwachts overleden aan een
                                hartstilstand. Er
                                is alleen geen uitvaart verzekering. Wij hopen als vrienden en familie op deze manier
                                een
                                bedrag bij elkaar te kunnen krijgen om de kosten van de uitvaart te dekken.</p>

                            <div className="mt-8 relative">
                                <Donate/>
                            </div>
                        </div>

                        <div>
                            <a href="https://open.spotify.com/playlist/38WoXVIhrK3k8Dols5oKia?si=935f2f37c17b42f2&pt=f5fd5c604d29f8ff18d5348f08ced57c">Spotify
                                link</a>
                        </div>
                    </article>

                </div>


            </main>

        </div>

    )
}

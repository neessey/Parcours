'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Image from "next/image"

export default function MatriculeForm() {
  const [matricule, setMatricule] = useState("")
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Logos */}
      <div className="flex justify-between items-start px-16 pt-6">
        <Image src="/LOGO_ERSYS_PRIMARY.png" alt="Logo gauche" width={160} height={30} />
        <Image src="/LOGOMETFPA-removebg-preview.png" alt="Logo droit" width={180} height={35} />
      </div>
      {/* Titre de bienvenue */}
      <div className="w-full flex flex-col items-center mt-2 mb-2" style={{ fontFamily: "Times New Roman, serif" }}>
        <span className="text-6xl font-bold text-[#4D5D91] leading-tight">Bienvenue sur Ersys parcours</span>
      </div>
      {/* Formulaire + GIF côte à côte */}
      <div className="flex flex-1 justify-between items-center px-8 sm:px-12 lg:px-24 gap-6 w-full">
        {/* Formulaire à gauche */}
        <div className="flex-1 flex justify-end">
          <div className="w-full max-w-md space-y-8">
        <form className="bg-white px-6 py-8 shadow sm:rounded-lg space-y-6">
          <div>
            <h2 className="mt-3 mb-14 text-center text-3xl font-bold tracking-tight text-gray-900">
          Entrez votre matricule
            </h2>
            <div>
          <input
            id="matricule"
            name="matricule"
            type="text"
            required
            placeholder="Ex : 15222569V"
            value={matricule}
            onChange={(e) => setMatricule(e.target.value)}
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
            </div>
          </div>
          <div>
            <button
          type="button"
          onClick={() => router.push('/recu')}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
          Voir la fiche
            </button>
          </div>
        </form>
          </div>
        </div>
        {/* GIF à droite */}
        <div className="flex-1 flex justify-start">
          <img
        src="/GIF.gif"
        alt="Animation"
        className="w-full max-w-xl h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto w-full text-center py-4 bg-[#566495] text-[#F7F7F6] text-sm">
        &copy; {new Date().getFullYear()} METFPA. Tous droits réservés.
      </footer>
    </div>
  )
}


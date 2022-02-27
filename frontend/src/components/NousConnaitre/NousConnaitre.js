import React from "react";
import "./NousConnaitre.css";
import viabilite from "../../images/viabilite.jpg";
import rg from "../../images/rg.jpg";
import equity from "../../images/equity.jpg";
import minioriterment from "../../images/minioriterment.png";

const NousConnaitre = () => {
  return (
    <div className="nousconnaitre">
      "{" "}
      <div className="presentationPlusChiffre">
        {/* presentation STB SICAR */}

        <div className="presentation">
          <h1>STB SICAR</h1>
          <p>
            La STB SICAR, filiale de la STB BANK, a été créée le 23 mars 1998.
            C'est une société d’investissement à capital risque qui a pour
            objectif la participation, pour son propre compte ou pour le compte
            de bailleurs de fonds au renforcement des opportunités
            d’investissement et des fonds propres des entreprises. Elle permet
            de procurer aux entreprises les fonds nécessaires à leur
            développement et à leur croissance avec obligation
          </p>
        </div>

        {/* Nos Chiffres cles  */}

        <div className="chiffreCles">
          <h1>Nos chiffres clés </h1>
          <div className="rowNousConnaitre">
            <div className="chiffreCles-col">
              <h3>23 ans D’expérience</h3>
            </div>
            <div className="chiffreCles-col">
              <h3>128MDT Sous gestion</h3>
            </div>
          </div>
          <div className="rowNousConnaitre">
            <div className="chiffreCles-col">
              <h3>300 Investissements en portefeuille</h3>
            </div>

            <div className="chiffreCles-col">
              <h3>58 Fonds gérés</h3>
            </div>
          </div>
          <div className="rowNousConnaitre">
            <div className="chiffreCles-col">
              <h3> 91 Sorties intégrales réalisées</h3>
            </div>

            <div className="chiffreCles-col">
              <h3>24 Régionss</h3>
            </div>
          </div>
          <div className="rowNousConnaitre">
            <div className="chiffreCles-col">
              <h3>1750 emplois créés durant les 5 dernières années</h3>
            </div>
          </div>
        </div>
      </div>
      {/* principes d'Investissements */}
      <div className="principeInvestissement">
        <h1> Principes d’investissement </h1>
        <div className="pi-row">
          <div className="pi-col">
            <img src={viabilite} alt="viabilite" />
            <div className="layer">
              <h3>Investir dans des projets viables</h3>
            </div>
          </div>

          <div className="pi-col">
            <img src={equity} alt="equity" />
            <div className="layer">
              <h3>Investir dans l’equity ou quasi equity </h3>
            </div>
          </div>
        </div>
        <div className="pi-row">
          <div className="pi-col">
            <img src={minioriterment} alt="minioriterment" />
            <div className="layer">
              <h3>Investir minoritairement</h3>
            </div>
          </div>

          <div className="pi-col">
            <img src={rg} alt="reglement" />
            <div class="layer">
              <h3>Investir en respect des ratios règlementaires</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Modes d’intervention */}
      <div className="mode-intervention">
        <h2> Modes d’intervention</h2>

        <div className="action-mode-intervention">
          <div className="col-mode-intervention">
            <h4> Les actions ordinaires (A.O) en sortie libre </h4>
          </div>
          <div className="col-mode-intervention">
            <h4> Les obligations convertibles en actions (O.C.A) </h4>
          </div>
          <div className="col-mode-intervention">
            <h4> Les avances sous forme de compte courant associé (C.C.A) </h4>
          </div>
        </div>
      </div>
      {/* Un Etat d'esprit  */}
      <div className="etat-esprit">
        <h2> UN ÉTAT D&#39;ESPRIT</h2>
        <h3>
          Nous plaçons la confiance comme valeur fondamentale d’un partenariat
          gagnant
        </h3>
        <div className="col-etat-esprit">
          <div className="title">
            <h4>UN ACCOMPAGNEMENT</h4>
          </div>
          <p>
            {" "}
            Nous partageons la conviction que la valeur d’une PME repose sur la
            qualité de son équipe dirigeante. En tant qu’actionnaire, nous nous
            positionnons comme un partenaire actif aux côtés des dirigeants.
            Ainsi, nos critères d’investissement privilégient, au-delà de
            l‘analyse économique et industrielle de la société, la qualité et la
            motivation des dirigeants auxquels nous nous associons.
          </p>
        </div>

        <div className="col-etat-esprit">
          <div className="title">
            <h4>LES VALEURS QUI SE PARTAGENT</h4>
          </div>
          <p>
            {" "}
            Partager les valeurs de respect, de loyauté et de transparence pour
            poser ensemble les fondations d’un partenariat durable et
            constructif. Notre philosophie d&#39;investissement est résolument «
            non-intrusive », pour préserver la liberté d’action des dirigeants
            de l’entreprise. Ainsi, tous nos investissements s’effectuent
            en mode minoritaire, en fonds propres et quasi- fonds propres. Nous
            privilégions une durée moyenne de participation « raisonnable »,
            comprise entre 5 et 7 ans.
          </p>
        </div>

        <div className="col-etat-esprit">
          <div className="title">
            <h4>UNE AVENTURE HUMAINE</h4>
          </div>
          <p>
            Chaque partenariat est une aventure riche d’expériences partagées et
            d’ambitions assumées.
          </p>
        </div>

        {/* notre valeur ajouter */}

        <div className="valeur-ajouter">
          <h3>Notre Valeur Ajouter</h3>

          <p>
            L’accompagnement des participations est une pierre angulaire du
            positionnement de la STB SICAR et un marqueur fort de sa stratégie.
            Notre expérience montre qu’en apportant des ressources et des
            compétences complémentaires à celles des équipes dirigeantes, nous
            pouvons contribuer significativement à la création de valeur
            stratégique de l’entreprise, tant sur le plan économique que social.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NousConnaitre;

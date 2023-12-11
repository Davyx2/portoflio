import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Iviplay  -  Consultant RSI - Prestataire <span> Oct 2022 - Oct 2023</span></h2>
                        <p>Administration Microsoft O365 *

Etablissement du Connexion SSO entre partenaires *

Administration Exchange Online Microsoft *

Administration Azure AD *

Surveillances des applications clients *

Gestion des ressources AWS avec Terraform *

Déploiement d'applications sur le cloud AWS  *
Audit et optimisation de coûts sur cloud AWS allant à plus de 50% de réduction sur la facture mensuel  *

Gestion des comptes sur tout les plateformes de déploiement d'application Mobile  *
Corrections des failles de sécurités réseaux et applications suite à l'audit de SecurityScorecard </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Arcadia Web - Devops GCP - Freelance <span>Jul 2021 - Aug2022</span></h2>
                        <p>Déploiement d'application sur GKE *
Monitoring avec vigil sur GKE *
Configuration et déploiements des automates pour Binance *
Optimisation et haute disponibilité des jobs pour les trades *
Mise en place de CI/CD bitbucket vers GKE *
Mise en place du CI/CD Jenkins vers le cluster GKE GCP </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>OPENSI - OPS & IT Security  - CDD <span>Avr-2021 - Sep 2022</span></h2>
                        <p>Mise en place de la haute disponibilité sur l'application du Conseil des Ministres basé à la présidence du Bénin *

Surveillance des services NAS, ISCSI, XENCENTER, sur le centre de donnée de la Rep. du Benin  *
Gestion Citrix Xenserver (HA, Pool , Iscsi , NAS. VM, Backups, DRBD) *

Assistant du projet d'obtention de la certification PCI-DSS chez KKIAPAY
Installation McAfee ePo Cloud, configuration des agents et applications des stratégies de sécurité  *
Configuration NFS(client/serveur)  * 
Mise en place d'un SIEM (sumologic), permettant à l'entreprise de centraliser et traiter tout les logs, systèmes comme applicatifs depuis trois diverses cloud (GCP, Mongo Atlas, Digital Ocean) *
Gestion avancé des bases de donnés(Postgres, Mongodb)  *
Développement de solution d'automatisation des taches ( Python + shell) *
Déploiement d'applications  *
Déploiement des services sur des applications existantes (KKIAPAY, GOMEDICAL, FNM, TVM,SANLAM..) *
Gestion des clusters GKE sur Google Cloud. *
Gestion des clusters sur Microsoft Azure - AKS *
Configuration des tunnel VPN site-to-site avec les opérateurs Telecom  *
Configuration des Runners gitlab CI/CD sur kubernetes - GKE  *
Support Technique niveau 3 *
Surveillance des applications sur GKE, DigitalOcean. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> OSSPO International - DEVOPS - CDD <span>Dec 2019 - Mar 2021</span></h2>
                        <p>Développement et déploiement d'applications web *
Création d'un programme python servant de sources de métrique pour prometheus en récupérant les traces des utilisateurs connectés sur nos serveurs *
Configurations de Prometheus pour le scrapping des métriques et Grafana pour l'affichage en temps réel des données scrappées *
Automatisation de déploiement avec Gitlab CI/CD et Jenkins pour nos applications Spring Boot utilisant du maven.
Installation d'un dépôt d'image prive HARBOR *
Développement de rôles ansibles pour l'installation de gitlab-runner, docker et autres *
Implementation du VPC private de quatres instances EC2, de sous réseau prives et d'un internat Gateway en utilisant Terraform *
Automatisation de la station de lancement d'un drone aquatique pour un client monthabor plaisance *
Customisation de l'OS ubuntu pour répondre aux contraintes de sécurité et d'expérience utilisateurs *
Création d'un programme en python permettant de visualiser en temps réel , les données statistiques issues des capteurs du drones *
Création d'un serveur TCP en python permettant le transfert de données entre la raspberry pi et l'outil de visualisation *
Liaison réseau entre la station de recharge du drone et l'espace de visualisation</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

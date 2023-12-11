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
                        <p>Microsoft O365 administration * Establishment of SSO connection between partners * Microsoft Exchange Online administration * Azure AD administration * Client application monitoring * AWS resource management with Terraform * Deployment of applications on the AWS cloud * Audit and cost optimization on AWS cloud going more than 50% off the monthly bill * Account management on all mobile application deployment platforms * Corrections of network and application security vulnerabilities following the SecurityScorecard audit </p>
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
                        <p>Application deployment on GKE * Monitoring with vigil on GKE * Configuration and deployment of trades for Binance * Optimization and high availability of jobs for trades * Implementation of bitbucket CI/CD to GKE * Implementation of Jenkins CI/CD to the GKE GCP cluster </p>
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
                        <p>Implementation of high availability on the application of the Council of Ministers based at the Presidency of Benin *
Monitoring of NAS, ISCSI, XENCENTER services, on the Rep. data center. from Benin *
Citrix Xenserver management (HA, Pool, Iscsi, NAS. VM, Backups, DRBD) *
Project assistant for obtaining PCI-DSS certification at KKIAPAY
Installing McAfee ePo Cloud, configuring agents, and applying security policies*
NFS configuration (client/server) *
Implementation of a SIEM (sumologic), allowing the company to centralize and process all logs, systems and applications from three various clouds (GCP, Mongo Atlas, Digital Ocean) *
Advanced database management (Postgres, Mongodb) *
Development of task automation solution (Python + shell) *
Application deployment *
Deployment of services on existing applications (KKIAPAY, GOMEDICAL, FNM, TVM, SANLAM..) *
Managing GKE clusters on Google Cloud. *
Cluster management on Microsoft Azure - AKS *
Configuration of site-to-site VPN tunnels with Telecom operators *
Configuring Gitlab CI/CD Runners on Kubernetes - GKE *
Level 3 Technical Support *
Application monitoring on GKE, DigitalOcean. </p>
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
                        <p>Development and deployment of web applications *
Creation of a python program serving as metric sources for prometheus by recovering traces of users connected to our servers *
Configurations of Prometheus for scrapping metrics and Grafana for real-time display of scraped data *
Deployment automation with Gitlab CI/CD and Jenkins for our Spring Boot applications using maven.
Installing a private HARBOR image repository*
Development of ansible roles for installing gitlab-runner, docker and others *
Implementation of the private VPC of four EC2 instances, private subnets and a Gateway boarding school using Terraform *
Automation of the launching station of an aquatic drone for a monthabor pleasure boat client *
Customization of the Ubuntu OS to meet security and user experience constraints *
Creation of a python program allowing real-time visualization of statistical data from drone sensors *
Creation of a TCP server in python allowing data transfer between the raspberry pi and the visualization tool *
Network connection between the drone charging station and the viewing area</p>
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

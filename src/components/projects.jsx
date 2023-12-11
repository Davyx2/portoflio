import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project shadow p-3 mb-5 bg-white rounded" style={{backgroundImage: 'url(images/image-terraform-project.png)'}}>
									<div className="desc">
										<div className="con">
											<h3 style={{fontFamily: ['Courgette', 'cursive'], fontWeight: 'bold', textAlign: 'center', fontSize: '20px'}}><a href="https://github.com/Davyx2/gozem-test-infra">Terraform Project</a></h3>
											<span> Terraform project: Setup Test Infrastrcture deploy in autoscalling group and configure VPC peering between MOngo Atlas container and AWS VPC</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> </a></span>
												<span><a href="#"><i className="icon-heart" /> </a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/ter2.png)'}}>
									<div className="desc">
										<div className="con">
											<h3 style={{fontFamily: ['Courgette', 'cursive'], fontWeight: 'bold', textAlign: 'center', fontSize: '20px'}}><a href="https://github.com/Davyx2/Aws-setup-vpc-eks">Terraform Project</a></h3>
											<span>Terraform project: Calling existant VPC and EKS module to deploy EKS cluster and save state to s3 </span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> </a></span>
												<span><a href="#"><i className="icon-heart" /> </a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/images-terraform.jpeg)'}}>
									<div className="desc">
										<div className="con">
											<h3 style={{ fontFamily: ['Courgette', 'cursive'], fontWeight: 'bold', textAlign: 'center', fontSize: '20px'}}><a href="https://github.com/Davyx2/guardduty-sns-terraform">Terraform project</a></h3>
											<span> Terraform project: Enable guardduty , configure metric on cloudwatch and push metric in SNS </span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> </a></span>
												<span><a href="#"><i className="icon-heart" /> </a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/node.webp)'}}>
									<div className="desc">
										<div className="con">
											<h3 style={{fontFamily: ['Courgette', 'cursive'], fontWeight: 'bold', textAlign: 'center', fontSize: '20px'}}><a href="https://github.com/Davyx2/api-gozem-test">API Tutorial Application</a></h3>
											<span> Building Nodejs  API</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> </a></span>
												<span><a href="#"><i className="icon-heart" /> </a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/node-exporter.png)'}}>
									<div className="desc">
										<div className="con">
											<h3 style={{fontFamily: ['Courgette', 'cursive'], fontWeight: 'bold', textAlign: 'center', fontSize: '20px'}}><a href="https://github.com/Davyx2/formation_aws_monitoring"> Monitoring Project: Build, configuration and deploy monitoring with prometheus, grafana, cadvisor</a></h3>
											<span>DevOps Monitoring</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> </a></span>
												<span><a href="#"><i className="icon-heart" /> </a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/ansible-banner-1.png)'}}>
									<div className="desc">
										<div className="con">
											<h3 style={{fontFamily: ['Courgette', 'cursive'], fontWeight: 'bold', textAlign: 'center', fontSize: '20px'}}><a href="https://github.com/Davyx2/gozem-test-conf"> Ansible Project </a></h3>
											<span> Ansible Project: Many Role for automate configuration on EC2 autoscaling </span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> </a></span>
												<span><a href="#"><i className="icon-heart" /> </a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="https://github.com/Davyx2?tab=repositories" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}

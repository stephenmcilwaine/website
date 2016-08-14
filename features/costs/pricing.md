---
layout: page
title: onCourse Pricing
permalink: /features/pricing
menu:
  name: pricing
  parent: features
---

<div class="pricing-container">
  <div class="row-item row-simple-text">
    <div class="col-price col-sm-6 col-xs-6 col-item-1">
      Completely free.
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-2">
      Ideal for small training organisations just getting started.
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-3">
      Our most popular plan.
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-4">
      Perfect if you want all the features onCourse has to offer.
    </div>
  </div>

  <div class="row-item row-price-block">
    <div class="col-price col-sm-6 col-xs-6 col-item-1">
      <span class="col-label">Community</span>
      <span class="col-rate">Free</span>
      <span class="col-text">&nbsp;</span>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-2 item-highlight">
      <span class="col-label">Light</span>
      <span class="col-rate">$190</span>
      <span class="col-text">per month</span>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-3">
      <span class="col-label">Professional</span>
      <span class="col-rate">$490</span>
      <span class="col-text">per month</span>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-4">
      <span class="col-label">Enterprise</span>
      <span class="col-rate">$990</span>
      <span class="col-text">per month</span>
    </div>
  </div>

{% assign class_right = 'col-price col-sm-6 col-xs-6' %}
{% for row in site.data.pricing-table-oncourse %}
  <div class="row-item row-details row-item-{{ forloop.index }}">
    {% if row.section %}
      <div class="{{ class_right }} col-item-{{ forloop.index }} highlight">{{ row.title }}</div>
    {% else %}
      {% for item in row.plans %}
        <div class="{{ class_right }} col-item-{{ forloop.index }}">
          <span class="col-desc{% unless item %} has-no-plan{% endunless %}">
            {% if item == true or item == false %}{{ row.title }}{% else %}{{ item }}{% endif %}<i class="app-icon icon-arrow-bottom"></i>
          </span>
          <div class="plan-details">
            {{ row.more }}
          </div>
        </div>
      {% endfor %}
    {% endif %}
  </div>
{% endfor %}

</div>


<h2>All plans give you</h2>

<h3>Unlimited enrolments</h3>
<p>Use onCourse to process 100 or 1,000,000 enrolments per year. No artificial limits.</p>

<h3>Upgrades</h3>
<p>Unlimited product upgrades are available during the life of your contract. Release candidate testing process also available, prior to each upgrade.</p>


<h3>AVETMISS export</h3>
<p>onCourse supports the AVETMISS export flavours for every state in Australia.</p>


<h3>Traineeship reporting</h3>
<p>Class by class or single student exporting and reports for traineeships</p>

<h3>Integrated email</h3>
<p>Send as many emails as you want to students, tutors and other contacts at no cost.


<h3>training.gov.au data updates</h3>
<p>Daily data feeds built into the software so you'll always have the information you need to build your courses and report your data</p>

<h3>User documentation</h3>
<p>Our comprehensive documentation of the product. Available to read or in editable form so that you can customise.</p>
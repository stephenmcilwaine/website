---
layout: page
title: onCourse Pricing
permalink: /features/pricing
---

<a role="button" href="{{base}}/pricing/ultimate" class="btn btn-secondary pull-xs-right">Our ultimate custom plan</a>

<div class="clearfix pricing-container">
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
            {{ item.title | default: row.title }}<i class="app-icon icon-arrow-bottom"></i>
          </span>
          <div class="plan-details">
            {% if item %}{{ item.more | default: row.more }}{% endif %}
          </div>
        </div>
      {% endfor %}
    {% endif %}
  </div>
{% endfor %}

  <div class="row-item">
    <div class="col-price col-sm-6 col-xs-6 col-item-1">
      <a role="button" href="{{base}}/download" class="btn btn-secondary">Download now</a>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-2 item-highlight">
      <a role="button" href="{{base}}/buy" class="btn btn-primary">Buy now</a>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-3">
      <a role="button" href="{{base}}/buy" class="btn btn-primary">Buy now</a>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-4">
      <a role="button" href="{{base}}/buy" class="btn btn-primary">Buy now</a>
    </div>
  </div>


</div>

<div class="pricing-calculation">

  <div class="row">
    <div class="col-sm-12">
      <p>
        All paid onCourse systems come with a beautiful website to display your courses and take enrolments. Reduce your ecommerce fees by selecting a website plan.
      </p>
      <p></p>
      <input id="pricing-in-slider" data-slider-id='pricing-in-slider' type="text" data-slider-min="1" data-slider-max="4" data-slider-step="1" data-slider-value="1"/>
      <small>Website ecommerce turnover</small>

    </div>
    <div class="col-sm-12">
      <div class="panel panel-default price-panel">
        <div class="panel-heading">
          <h5 class="panel-title">Website</h5>
          <p class="price-text">$<span>285</span></p>
          <p>per month</p>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-xs-18">
              eCommerce
            </div>
            <div class="col-xs-6">
              <span class="ecommerce-text">2</span>%
            </div>
          </div>

          <div class="row">
            <div class="col-xs-18">
              Transaction
            </div>
            <div class="col-xs-6">
              <span class="transaction-text">85</span> cents
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

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
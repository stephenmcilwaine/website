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
          <span class="col-desc{% unless item.plan %} has-no-plan{% endunless %}">
            {% if item.plan == true or item.plan == false %}{{ row.title }}{% else %}{{ item.plan }}{% endif %}<i class="app-icon icon-arrow-bottom"></i>
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
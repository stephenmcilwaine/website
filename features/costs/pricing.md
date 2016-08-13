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
      Ideal for small training organisations just getting started.
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-2">
      Our most popular plan.
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-3">
      Perfect if you want all the features onCourse has to offer.
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-4">
      A customised plan crafted for your needs.
    </div>
  </div>

  <div class="row-item row-price-block">
    <div class="col-price col-sm-6 col-xs-6 col-item-1">
      <span class="col-label">Light</span>
      <span class="col-rate">$190</span>
      <span class="col-text">per month</span>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-2 item-highlight">
      <span class="col-label">Professional</span>
      <span class="col-rate">$490</span>
      <span class="col-text">per month</span>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-3">
      <span class="col-label">Enterprise</span>
      <span class="col-rate">$990</span>
      <span class="col-text">per month</span>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-4">
      <span class="col-label">Ultimate</span>
      <span class="col-rate">&nbsp;</span>
      <span class="col-text">negotiable</span>
    </div>
  </div>

{% assign item_highlighted = 2 %}
{% assign class_right = 'col-price col-sm-6 col-xs-6' %}
{% for price in site.data.pricing-table-oncourse %}
  <div class="row-item row-details row-item-{{ forloop.index }}">
    {% assign row_highlighted = price.highlight %}
    {% for item in price.plans %}
      <div class="{{ class_right }} col-item-{{ forloop.index }}{% if row_highlighted == true %} highlight{% endif %}{% if item_highlighted == forloop.index %} item-highlight{% endif %}">

        {% assign has_no_plan = false %}
        {% if item.plan == nil %}
          {% assign has_no_plan = true %}
        {% endif %}
        <span class="col-desc{% if has_no_plan == true %} has-no-plan{% endif %}">
          {{ price.title }}
          {% if has_no_plan == false %}
            <i class="app-icon icon-arrow-bottom"></i>
          {% endif %}
        </span>
        {% if has_no_plan == false %}
          <div class="plan-details">
            {{ item.plan }}
          </div>
        {% endif %}
        {% if price.more %}
          <div class="hide item-more-details">{{ price.more }}</div>
        {% endif %}
      </div>
    {% endfor %}
  </div>
{% endfor %}

</div>
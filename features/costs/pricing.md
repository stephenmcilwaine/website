---
layout: page
title: onCourse Pricing
permalink: /features/pricing
menu:
  name: pricing
  parent: features
---

<div class="pricing-container">
{% for price in site.data.pricing-table-oncourse %}
  {% assign title = price.title %}
  {% if title == 'desc' %}
    <div class="row-item row-simple-text">
      {% for col in price.cols %}
        {% if forloop.index == 1 %}
          <div class="col-price col-first col-sm-4"></div>
        {% else %}
          <div class="col-price col-sm-5">{{ col.desc }}</div>
        {% endif %}
      {% endfor %}
    </div>
  {% elsif title == 'price' %}
    <div class="row-item row-price-block">
      {% for col in price.cols %}
        {% if forloop.index == 1 %}
          <div class="col-price col-first col-sm-4"></div>
        {% else %}
          <div class="col-price col-sm-5{% if col.highlight == true %} item-highlight {% endif %} {{ col.class }}">
            <span class="col-label">{{ col.desc }}</span>
            <span class="col-rate">{% if col.rate == null %}&nbsp;{% else %}{{ col.rate }}{% endif %}</span>
            <span class="col-text">{{ col.text }}</span>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  {% else %}
    <div class="row-item row-details">
      {% assign old_text = '' %}
      {% for col in price.cols %}
        {% if forloop.index == 1 %}
          {% assign old_text = col.desc %}
          <div class="col-price col-first{% if col.highlight == true %} highlight {% endif %} {{ col.class }} col-sm-4">{{ col.desc }}
            {% if col.more %}
              <div class="hide item-more-details">{{ col.more }}</div>
            {% endif %}
          </div>

        {% else %}
          <div class="col-price col-sm-5"{% if forloop.index == 2 %} data-title="{{ old_text }}" {% endif %}>
            <span class="col-desc">{{ col.desc }}</span>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  {% endif %}
{% endfor %}
</div>
---
layout: page
title: onCourse Pricing
permalink: /pricing
---

<input id="annual-toggle" checked data-toggle="toggle" data-on="Monthly" data-off="Annual" data-onstyle="primary" data-offstyle="info" type="checkbox">


<div class="clearfix pricing-container">

  <p class="pull-xs-right">
    <a role="button" href="{{base}}/pricing/ultimate" class="btn btn-secondary">Our ultimate custom plan</a>
  </p>

  <div class="row row-item row-simple-text">
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

  <div class="row row-item row-price-block">
    <div class="col-price col-sm-6 col-xs-6 col-item-1">
      <span class="col-label">Community</span>
      <span class="price-rate">Free</span>
      <span class="price-rate-annual">Free</span>
      <span class="col-text">&nbsp;</span>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-2 item-highlight">
      <span class="col-label">Light</span>
      <span class="price-rate">$190</span>
      <span class="price-rate-annual">$162</span>
      <span class="col-text">per month</span>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-3">
      <span class="col-label">Professional</span>
      <span class="price-rate">$490</span>
      <span class="price-rate-annual">$417</span>
      <span class="col-text">per month</span>
    </div>
    <div class="col-price col-sm-6 col-xs-6 col-item-4">
      <span class="col-label">Enterprise</span>
      <span class="price-rate">$990</span>
      <span class="price-rate-annual">$842</span>
      <span class="col-text">per month</span>
    </div>
  </div>

{% assign class_right = 'col-price col-sm-6 col-xs-6' %}
{% for row in site.data.pricing-table-oncourse %}
  <div class="row row-item row-details row-item-{{ forloop.index }}">
    {% if row.section %}
      <div class="{{ class_right }} col-item-{{ forloop.index }} highlight">{{ row.title }}</div>
    {% else %}
      {% for item in row.plans %}
        <div class="{{ class_right }} col-item-{{ forloop.index }}">
          <span class="col-desc{% unless item %} has-no-plan{% endunless %}">
            {{ item.title | default: row.title }}
            {% if item %}<i class="glyphicon glyphicon-chevron-down"></i>{% endif %}
          </span>
          <div class="plan-details">
            {% if item %}{{ item.more | default: row.more }}{% endif %}
          </div>
        </div>
      {% endfor %}
    {% endif %}
  </div>
{% endfor %}

  <div class="row row-item">
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



  <div class="pricing-calculation">

    <div class="row">
      <div class="col-sm-12">
        <p>
          All paid onCourse systems come with a beautiful website to display your courses and take enrolments.
        </p>
        <p></p>
        <input id="pricing-in-slider" data-slider-id='pricing-in-slider' type="text" data-slider-min="1" data-slider-max="4" data-slider-step="1" data-slider-value="1"/>
        <small>Website annual ecommerce turnover</small>

      </div>
      <div class="col-sm-10">
        <div class="panel panel-default price-panel">
          <div class="panel-heading">
            <h5 class="panel-title">Website</h5>
            <p class="price-rate">$<span>0</span></p>
            <p class="price-rate-annual">$<span>0</span></p>
            <p>per month</p>
          </div>
          <div class="panel-body">
            <div class="row data-toggle">
              <div class="col-xs-12">
                eCommerce fee
              </div>
              <div class="col-xs-12">
                <span class="ecommerce-text">6</span>%
                <i class="pull-xs-right glyphicon glyphicon-chevron-down"></i>
              </div>
            </div>
            <div class="row toggle-details">
              <div class="col-xs-24">
                A usage fee based on the total of the student charges.<br><br>
              </div>
            </div>

            <div class="row data-toggle">
              <div class="col-xs-12">
                Per transaction
              </div>
              <div class="col-xs-12">
                <span class="transaction-text">110</span> cents
                <i class="pull-xs-right glyphicon glyphicon-chevron-down"></i>
              </div>
            </div>
            <div class="row toggle-details">
              <div class="col-xs-24">
                A fee per payment processed.<br><br>
              </div>
            </div>
            <br/>

            <div class="row data-toggle">
              <div class="col-xs-24">
                Load balanced servers and 99.5% SLA
                <i class="pull-xs-right glyphicon glyphicon-chevron-down"></i>
              </div>
            </div>

            <div class="row toggle-details">
              <div class="col-xs-24">
                We recognise that your website needs to be up. Always. We take care of monitoring, backups and full redundancy in an Australian data centre.<br><br>
              </div>
            </div>

            <div class="row data-toggle">
              <div class="col-xs-24">
                Student and tutor portals
                <i class="pull-xs-right glyphicon glyphicon-chevron-down"></i>
              </div>
            </div>
            <div class="row toggle-details">
              <div class="col-xs-24">
                Access to timetables, attendance marking and communication tools. USI verification and AVETMISS collection.<br><br>
              </div>
            </div>

            <div class="row data-toggle not-free">
              <div class="col-xs-24">
                Your domain
                <i class="pull-xs-right glyphicon glyphicon-chevron-down"></i>
              </div>
            </div>
            <div class="row toggle-details not-free">
              <div class="col-xs-24">
                Any URL you choose. We'll even organise the SSL certificate.<br><br>
              </div>
            </div>

            <div class="row data-toggle not-free">
              <div class="col-xs-24">
                Domain hosting
                <i class="pull-xs-right glyphicon glyphicon-chevron-down"></i>
              </div>
            </div>
            <div class="row toggle-details not-free">
              <div class="col-xs-24">
                Our three domain servers on two continents will ensure your domain is always available.<br><br>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>

</div>

<div class="clearfix plans-support">
  <h2 class="text-xs-center">All plans give you</h2>
  <div class="row text-xs-center">
    <div class="col-lg-8 col-sm-12 col-xs-24">
      <img src="{{ site.paths.img }}/icons/no-preview-courses.png" class="icon-plans" />
      <h3>Unlimited enrolments</h3>
      <p>Use onCourse to process 100 or 1,000,000 enrolments per year. No artificial limits.</p>
    </div>

    <div class="col-lg-8 col-sm-12 col-xs-24">
      <img src="{{ site.paths.img }}/icons/no-preview-courses.png" class="icon-plans" />
      <h3>Upgrades</h3>
      <p>Unlimited product upgrades. Our cloud customers get an upgrade roughly every month.</p>
    </div>

    <div class="col-lg-8 col-sm-12 col-xs-24">
      <img src="{{ site.paths.img }}/icons/no-preview-courses.png" class="icon-plans" />
      <h3>AVETMISS and Traineeship reporting</h3>
      <p>onCourse supports the AVETMISS and traineeship export flavours for every state in Australia.</p>
    </div>

    <div class="col-lg-8 col-sm-12 col-xs-24">
      <img src="{{ site.paths.img }}/icons/no-preview-courses.png" class="icon-plans" />
      <h3>Integrated email</h3>
      <p>Send as many emails as you want to students, tutors and other contacts at no cost.</p>
    </div>

    <div class="col-lg-8 col-sm-12 col-xs-24">
      <img src="{{ site.paths.img }}/icons/no-preview-courses.png" class="icon-plans" />
      <h3>training.gov.au data updates</h3>
      <p>Daily data feeds built into the software so you'll always have correct data.</p>
    </div>

    <div class="col-lg-8 col-sm-12 col-xs-24">
      <img src="{{ site.paths.img }}/icons/no-preview-courses.png" class="icon-plans" />
      <h3>User documentation</h3>
      <p>Our comprehensive documentation of the product as web pages, PDF and inside the application. Also available in editable form you can customise.</p>
    </div>
  </div>
</div>
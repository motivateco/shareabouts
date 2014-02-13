/*global Handlebars _ moment */

var Shareabouts = Shareabouts || {};

(function(NS) {
  Handlebars.registerHelper('STATIC_URL', function() {
    return NS.bootstrapped.staticUrl;
  });

  Handlebars.registerHelper('debug', function(value) {
    if (typeof(value) === typeof({})) {
      return JSON.stringify(value, null, 4);
    } else {
      return value;
    }
  });

  // Current user -------------------------------------------------------------

  Handlebars.registerHelper('is_authenticated', function(options) {
    return (NS.bootstrapped && NS.bootstrapped.currentUser) ? options.fn(this) : options.inverse(this);
  });

  Handlebars.registerHelper('current_user', function(attr) {
    return (NS.bootstrapped.currentUser ? NS.bootstrapped.currentUser[attr] : undefined);
  });

  // Date and time ------------------------------------------------------------

  Handlebars.registerHelper('formatdatetime', function(datetime, format) {
    if (datetime) {
      return moment(datetime).format(format);
    }
    return datetime;
  });

  Handlebars.registerHelper('fromnow', function(datetime) {
    if (datetime) {
      return moment(datetime).fromNow();
    }
    return '';
  });

  // String -------------------------------------------------------------------

  Handlebars.registerHelper('truncatechars', function(text, maxLength, continuationString) {
    if (_.isUndefined(continuationString) || !_.isString(continuationString)) {
      continuationString = '...';
    }

    if (text && text.length > maxLength) {
      return text.slice(0, maxLength - continuationString.length) + continuationString;
    } else {
      return text;
    }
  });

  Handlebars.registerHelper('is_submitter_name', function(options) {
    return (this.name === 'submitter_name') ? options.fn(this) : options.inverse(this);
  });

  // Place Details
  Handlebars.registerHelper('action_text', function() {
    return NS.Config.place.action_text || '';
  });

  Handlebars.registerHelper('place_type_label', function(typeName) {
    var placeType = NS.Config.placeTypes[typeName];
    return placeType ? (placeType.label || typeName) : '';
  });

  Handlebars.registerHelper('anonymous_name', function(typeName) {
    return NS.Config.place.anonymous_name;
  });

  Handlebars.registerHelper('survey_label_by_count', function() {
    var count = 0,
        submissionSet;

    if (this.submission_sets && this.submission_sets[NS.Config.survey.submission_type]) {
      submissionSet = this.submission_sets[NS.Config.survey.submission_type];
      count = submissionSet ? submissionSet.length : 0;
    }

    if (count === 1) {
      return NS.Config.survey.response_name;
    }
    return NS.Config.survey.response_plural_name;
  });

  Handlebars.registerHelper('survey_label', function() {
    return NS.Config.survey.response_name;
  });

  Handlebars.registerHelper('survey_count', function() {
    var count = 0,
        submissionSet;

    if (this.submission_sets && this.submission_sets[NS.Config.survey.submission_type]) {
      submissionSet = this.submission_sets[NS.Config.survey.submission_type];
      count = submissionSet ? submissionSet.length : 0;
    }

    return count;
  });


  Handlebars.registerHelper('each_place_item', function(options) {
    var result = '';

    _.each(NS.Config.place.items, function(item, i) {
      var exclusions = ['submitter_name', 'name', 'location_type'],
        newItem = {
          name: item.name,
          label: item.label,
          value: this[item.name]
        };

      // if not an exclusion and not private data
      if (_.contains(exclusions, item.name) === false &&
          item.name.indexOf('private-') !== 0) {
        result += options.fn(newItem);
      }
    }, this);

    return result;
  });

}(Shareabouts));
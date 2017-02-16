require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Clonify
  class Application < Rails::Application

    config.assets.precompile << /\.(?:svg|eot|woff|ttf|otf)$/
    config.assets.paths << Rails.root.join('app', 'assets', 'fonts')

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end

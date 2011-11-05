module Jekyll

  class Post

    alias_method :orig_initialize, :initialize
    def initialize(site, source, dir, name)
      orig_initialize(site, source, dir, name)
      self.tags ||= []
      if self.data['meta']
        self.data['meta'].each do |d|
          if d['sort']
            tag = d['value'].to_s.downcase
            if d['key'] == 'type'
              tag=tag.en.plural
            end
            unless tag == 'none'
              self.tags << tag
            end
          end
        end
      end
      if self.data['type']
        tag = self.data['type'].to_s.downcase
        tag = tag.en.plural
        unless tag == 'none' || tag == 'posts'
          self.tags << tag
        end
      end
      self.tags.compact!
      self.tags.uniq!
    end

  end

  class Site

    # Returns [{"blog"=>[[{"name"=>"blog", "posts"=>[, , , , , , , , , ]}]], "archive"=>[[{"name"=>"art", "posts"=>[, , , , , , , ]}, {"name"=>"teaching", "posts"=>[, , , , , ]}]] ]
    def collection_by_attribute(collection, attribute)
      hash = Hash.new { |hash, key| hash[key] = Array.new }
      collection.keys.each do |item|
        attribute_hash = collect_by_attribute(attribute, collection[item])
        
        type_array = make_iterable(attribute_hash, :index => 'name', :items => 'posts')
        hash[item] << type_array
      end
     
      return hash
    end

    # Returns [{<collection.title> => [{'name' => <attribute>, 'posts' => [{},{},{},{}]}]
    def collect_by_attribute(attribute, posts)
      hash = Hash.new { |hash, key| hash[key] = Array.new }
      posts.each do |post|
        if attribute == 'tags'
          post.tags.each do |tag|
            hash[tag] << post
          end
        else
          if post.data[attribute]
            if post.data[attribute].respond_to?('each')
              post.data[attribute].each do |att|
                hash[att] << post
              end
            else
              hash[post.data[attribute]] << post
            end
          end 
        end
      end
      hash.values.map do |sort|
          sort.sort! {|a, b| a.slug <=> b.slug}
      end
      return hash
    end

    # Returns {"name"=>"000025-01", "images"=>[, ]}{"name"=>"bodhi", "images"=>[, , , , , ]}{"name"=>"cedar-creek", "images"=>[, , , , ]}}
    def make_iterable(kv_hash, options)
      options = {:index => 'name', :items => 'items'}.merge(options)
      result = []
      kv_hash.sort.each do |key, value|
        result << { options[:index] => key, options[:items] => value }
      end
      result
    end

    def collect_albums(posts)
      hash = Hash.new { |hash, key| hash[key] = Array.new }
      self.posts.each do |post|
        if post.data['type'] == 'image'
          post.data['albums'].each do |album|
              hash[album] << post
          end
        end
      end
      hash.values.map do |sort|
        sort.sort! {|a, b| a.slug <=> b.slug}
      end
      return hash
    end

    def collect_bibliography(posts)
      bib=posts['writing']
      bib.each do |posts|
        posts.each do |p|
          p['posts'].sort! {|a, b| b.data['pub-date'] <=> a.data['pub-date']}
        end
      end
      return bib
    end

    def collect_blogposts(posts)
      hash = Hash.new { |hash, key| hash[key] = Array.new }
      blogposts=posts['blog']
      i=0
      page=1
      pagelimit=self.config['posts_per_page']
      blogposts.sort! {|a, b| b.date <=> a.date}
      blogposts.each do |p|
        if i<pagelimit
          i+=1
        else
          page+=1
          i=1
        end
        hash['Page '+page.to_s] << p
      end

      return hash
    end

    # Redefine site_payload to include our new method.
    alias_method :orig_site_payload, :site_payload
    def site_payload
      payload = orig_site_payload
      # Custom collections
      payload['site']['sub-categories'] = self.collect_by_attribute('sub-category', self.posts)
      payload['site']['navs'] = self.collect_by_attribute('nav', self.posts)
      payload['site']['albums'] = self.collect_albums(self.posts)
      payload['site']['bibliography'] = self.collect_bibliography(self.collection_by_attribute(self.categories, 'sub-category'))
      payload['site']['blog-pages'] = self.collect_blogposts(self.categories)
      # Collections by attribute
      payload['site']['categories_by_sub'] = self.collection_by_attribute(self.categories, 'sub-category')
        # sort 'writing' by pub-date
        payload['site']['categories_by_sub']['writing'][0].each {|cat|
          cat['posts'].sort! {|a, b| a.data['pub-date'] <=> b.data['pub-date']}
        }
        # sort 'exhibitions' by exhibition-date
        payload['site']['categories_by_sub']['art'][0].each {|sub|
          if sub['name'] == 'exhibitions'
            sub['posts'].sort! {|a, b| a.data['exhibition-date'] <=> b.data['exhibition-date']}
          end
        }
      payload['site']['tags_by_category'] = self.collection_by_attribute(self.tags, 'category')
      payload['site']['navs_by_category'] = self.collection_by_attribute(payload['site']['navs'], 'category')
      payload['site']['sub-categories_by_tag'] = self.collection_by_attribute(payload['site']['sub-categories'], 'tags')
      # Iterable collections
      payload['site']['iterable_categories'] = self.make_iterable(self.categories, :index => 'name', :items => 'posts')
      payload['site']['iterable_sub'] = self.make_iterable(payload['site']['sub-categories'], :index => 'name', :items => 'posts')
      payload['site']['iterable_navs'] = self.make_iterable(payload['site']['navs'], :index => 'name', :items => 'posts')
      payload['site']['iterable_albums'] = self.make_iterable(payload['site']['albums'], :index => 'name', :items => 'images')      
      payload
    end

  end
end

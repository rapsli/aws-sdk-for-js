/**
 * @class AmazonCloudSearchClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonCloudSearch(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonCloudSearch.prototype = {
  service:'cloudsearch',
  version:'2011-02-01',
  auth_class: new AuthV4Query(),
  /**
   * @memberOf AmazonCloudSearch
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },
 
  /**
   * Creates a new search domain.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_domain: function(domain_name,opt){
    var payload = {};
    payload.domain_name = domain_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("CreateDomain", payload );
    return response;
  }, 
  /**
   * Configures an <code>IndexField</code> for the search domain. Used to create new fields and
   * modify existing ones. If the field exists, the new configuration replaces the old one. You can
   * configure a maximum of 200 index fields.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param array $index_field (Required) Defines a field in the index, including its name, type, and the source of its data. The <code>IndexFieldType</code> indicates which of the options will be present. It is invalid to specify options for a type other than the <code>IndexFieldType</code>. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>IndexFieldName</code> - <code>string</code> - Required - The name of a field in the search index. Field names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Uppercase letters and hyphens are not allowed. The names "body", "docid", and "text_relevance" are reserved and cannot be specified as field or rank expression names. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9_]*</code>]</li>
   *     <li><code>IndexFieldType</code> - <code>string</code> - Required - The type of field. Based on this type, exactly one of the <code>UIntOptions</code>, <code>LiteralOptions</code> or <code>TextOptions</code> must be present. [Allowed values: <code>uint</code>, <code>literal</code>, <code>text</code>]</li>
   *     <li><code>UIntOptions</code> - <code>array</code> - Optional - Options for an unsigned integer field. Present if <code>IndexFieldType</code> specifies the field is of type unsigned integer. <ul>
   *       <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *         <li><code>DefaultValue</code> - <code>integer</code> - Optional - The default value for an unsigned integer field. Optional.</li>
   *       </ul></li>
   *     </ul></li>
   *     <li><code>LiteralOptions</code> - <code>array</code> - Optional - Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type literal. <ul>
   *       <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *         <li><code>DefaultValue</code> - <code>string</code> - Optional - The default value for a literal field. Optional.</li>
   *         <li><code>SearchEnabled</code> - <code>boolean</code> - Optional - Specifies whether search is enabled for this field. Default: False.</li>
   *         <li><code>FacetEnabled</code> - <code>boolean</code> - Optional - Specifies whether facets are enabled for this field. Default: False.</li>
   *         <li><code>ResultEnabled</code> - <code>boolean</code> - Optional - Specifies whether values of this field can be returned in search results and used for ranking. Default: False.</li>
   *       </ul></li>
   *     </ul></li>
   *     <li><code>TextOptions</code> - <code>array</code> - Optional - Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type text. <ul>
   *       <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *         <li><code>DefaultValue</code> - <code>string</code> - Optional - The default value for a text field. Optional.</li>
   *         <li><code>FacetEnabled</code> - <code>boolean</code> - Optional - Specifies whether facets are enabled for this field. Default: False.</li>
   *         <li><code>ResultEnabled</code> - <code>boolean</code> - Optional - Specifies whether values of this field can be returned in search results and used for ranking. Default: False.</li>
   *       </ul></li>
   *     </ul></li>
   *     <li><code>SourceAttributes</code> - <code>array</code> - Optional - An optional list of source attributes that provide data for this index field. If not specified, the data is pulled from a source attribute with the same name as this <code>IndexField</code>. When one or more source attributes are specified, an optional data transformation can be applied to the source data when populating the index field. You can configure a maximum of 20 sources for an <code>IndexField</code>. <ul>
   *       <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *         <li><code>SourceDataFunction</code> - <code>string</code> - Required - Identifies the transformation to apply when copying data from a source attribute. [Allowed values: <code>Copy</code>, <code>TrimTitle</code>, <code>Map</code>]</li>
   *         <li><code>SourceDataCopy</code> - <code>array</code> - Optional - Copies data from a source document attribute to an <code>IndexField</code>. <ul>
   *           <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *             <li><code>SourceName</code> - <code>string</code> - Required - The name of the document source field to add to this <code>IndexField</code>. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9_]*</code>]</li>
   *             <li><code>DefaultValue</code> - <code>string</code> - Optional - The default value to use if the source attribute is not specified in a document. Optional.</li>
   *           </ul></li>
   *         </ul></li>
   *         <li><code>SourceDataTrimTitle</code> - <code>array</code> - Optional - Trims common title words from a source document attribute when populating an <code>IndexField</code>. This can be used to create an <code>IndexField</code> you can use for sorting. <ul>
   *           <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *             <li><code>SourceName</code> - <code>string</code> - Required - The name of the document source field to add to this <code>IndexField</code>. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9_]*</code>]</li>
   *             <li><code>DefaultValue</code> - <code>string</code> - Optional - The default value to use if the source attribute is not specified in a document. Optional.</li>
   *             <li><code>Separator</code> - <code>string</code> - Optional - The separator that follows the text to trim.</li>
   *             <li><code>Language</code> - <code>string</code> - Optional - An <a href="http://tools.ietf.org/html/rfc4646">IETF RFC 4646</a> language code. Only the primary language is considered. English (en) is currently the only supported language. [Constraints: The value must match the following regular expression pattern: <code>[a-zA-Z]{2,8}(?:-[a-zA-Z]{2,8})*</code>]</li>
   *           </ul></li>
   *         </ul></li>
   *         <li><code>SourceDataMap</code> - <code>array</code> - Optional - Maps source document attribute values to new values when populating the <code>IndexField</code>. <ul>
   *           <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *             <li><code>SourceName</code> - <code>string</code> - Required - The name of the document source field to add to this <code>IndexField</code>. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9_]*</code>]</li>
   *             <li><code>DefaultValue</code> - <code>string</code> - Optional - The default value to use if the source attribute is not specified in a document. Optional.</li>
   *             <li><code>Cases</code> - <code>array</code> - Optional - A map that translates source field values to custom values. <ul>
   *               <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *                 <li><code>[custom-key]</code> - <code>string</code> - Optional - The value of a field or source document attribute.</li>
   *               </ul></li>
   *             </ul></li>
   *           </ul></li>
   *         </ul></li>
   *       </ul></li>
   *     </ul></li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  define_index_field: function(domain_name,index_field,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload.index_field = index_field;

    payload = this.marge_param(payload,opt);
    var response = this.request("DefineIndexField", payload );
    return response;
  }, 
  /**
   * Configures a <code>RankExpression</code> for the search domain. Used to create new rank
   * expressions and modify existing ones. If the expression exists, the new configuration replaces
   * the old one. You can configure a maximum of 50 rank expressions.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param array $rank_expression (Required) A named expression that can be evaluated at search time and used for ranking or thresholding in a search query. <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>RankName</code> - <code>string</code> - Required - The name of a rank expression. Rank expression names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Uppercase letters and hyphens are not allowed. The names "body", "docid", and "text_relevance" are reserved and cannot be specified as field or rank expression names. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9_]*</code>]</li>
   *     <li><code>RankExpression</code> - <code>string</code> - Required - The expression to evaluate for ranking or thresholding while processing a search request. The <code>RankExpression</code> syntax is based on JavaScript expressions and supports:<ul><li>Integer, floating point, hex and octal literals</li><li>Shortcut evaluation of logical operators such that an expression <code>a || b</code> evaluates to the value <code>a</code> if <code>a</code> is <code>true</code> without evaluting <code>b</code> at all</li><li>JavaScript order of precendence for operators</li><li>Arithmetic operators: <code>+ - * / %</code> </li><li>Boolean operators (including the ternary operator)</li><li>Bitwise operators</li><li>Comparison operators</li><li>Common mathematic functions: <code>abs ceil erf exp floor lgamma ln log2 log10 max min sqrt pow</code> </li><li>Trigonometric library functions: <code>acosh acos asinh asin atanh atan cosh cos sinh sin tanh tan</code> </li><li>Random generation of a number between 0 and 1: <code>rand</code> </li><li>Current time in epoch: <code>time</code> </li><li>The <code>min max</code> functions that operate on a variable argument list</li></ul>Intermediate results are calculated as double precision floating point values. The final return value of a <code>RankExpression</code> is automatically converted from floating point to a 32-bit unsigned integer by rounding to the nearest integer, with a natural floor of 0 and a ceiling of max(uint32_t), 4294967295. Mathematical errors such as dividing by 0 will fail during evaluation and return a value of 0. The source data for a <code>RankExpression</code> can be the name of an <code>IndexField</code> of type uint, another <code>RankExpression</code> or the reserved name <em>text_relevance</em>. The text_relevance source is defined to return an integer from 0 to 1000 (inclusive) to indicate how relevant a document is to the search request, taking into account repetition of search terms in the document and proximity of search terms to each other in each matching <code>IndexField</code> in the document. For more information about using rank expressions to customize ranking, see the Amazon CloudSearch Developer Guide.</li>
   *   </ul></li>
   * </ul>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  define_rank_expression: function(domain_name,rank_expression,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload.rank_expression = rank_expression;

    payload = this.marge_param(payload,opt);
    var response = this.request("DefineRankExpression", payload );
    return response;
  }, 
  /**
   * Permanently deletes a search domain and all of its data.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_domain: function(domain_name,opt){
    var payload = {};
    payload.domain_name = domain_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("DeleteDomain", payload );
    return response;
  }, 
  /**
   * Removes an <code>IndexField</code> from the search domain.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param {String} index_field_name (Required) A string that represents the name of an index field. Field names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Uppercase letters and hyphens are not allowed. The names "body", "docid", and "text_relevance" are reserved and cannot be specified as field or rank expression names. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9_]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_index_field: function(domain_name,index_field_name,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload.index_field_name = index_field_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("DeleteIndexField", payload );
    return response;
  }, 
  /**
   * Removes a <code>RankExpression</code> from the search domain.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param {String} rank_name (Required) The name of the <code>RankExpression</code> to delete. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9_]*</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_rank_expression: function(domain_name,rank_name,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload.rank_name = rank_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("DeleteRankExpression", payload );
    return response;
  }, 
  /**
   * Gets the default search field configured for the search domain.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_default_search_field: function(domain_name,opt){
    var payload = {};
    payload.domain_name = domain_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeDefaultSearchField", payload );
    return response;
  }, 
  /**
   * Gets information about the search domains owned by this account. Can be limited to specific
   * domains. Shows all domains by default.
   *
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>DomainNames</code> - <code>string|array</code> - Optional - Limits the DescribeDomains response to the specified search domains. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_domains: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeDomains", payload );
    return response;
  }, 
  /**
   * Gets information about the index fields configured for the search domain. Can be limited to
   * specific fields by name. Shows all fields by default.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>FieldNames</code> - <code>string|array</code> - Optional - Limits the <code>DescribeIndexFields</code> response to the specified fields. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_index_fields: function(domain_name,opt){
    var payload = {};
    payload.domain_name = domain_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeIndexFields", payload );
    return response;
  }, 
  /**
   * Gets the rank expressions configured for the search domain. Can be limited to specific rank
   * expressions by name. Shows all rank expressions by default.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>RankNames</code> - <code>string|array</code> - Optional - Limits the <code>DescribeRankExpressions</code> response to the specified fields. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_rank_expressions: function(domain_name,opt){
    var payload = {};
    payload.domain_name = domain_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeRankExpressions", payload );
    return response;
  }, 
  /**
   * Gets information about the resource-based policies that control access to the domain's document
   * and search services.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_service_access_policies: function(domain_name,opt){
    var payload = {};
    payload.domain_name = domain_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeServiceAccessPolicies", payload );
    return response;
  }, 
  /**
   * Gets the stemming dictionary configured for the search domain.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_stemming_options: function(domain_name,opt){
    var payload = {};
    payload.domain_name = domain_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeStemmingOptions", payload );
    return response;
  }, 
  /**
   * Gets the stopwords configured for the search domain.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_stopword_options: function(domain_name,opt){
    var payload = {};
    payload.domain_name = domain_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeStopwordOptions", payload );
    return response;
  }, 
  /**
   * Gets the synonym dictionary configured for the search domain.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_synonym_options: function(domain_name,opt){
    var payload = {};
    payload.domain_name = domain_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeSynonymOptions", payload );
    return response;
  }, 
  /**
   * Tells the search domain to start indexing its documents using the latest text processing
   * options and <code>IndexFields</code>. This operation must be invoked to make options whose
   * <code>OptionStatus</code> has <code>OptionState</code> of <code>RequiresIndexDocuments</code>
   * visible in search results.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  index_documents: function(domain_name,opt){
    var payload = {};
    payload.domain_name = domain_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("IndexDocuments", payload );
    return response;
  }, 
  /**
   * Configures the default search field for the search domain. The default search field is used
   * when a search request does not specify which fields to search. By default, it is configured to
   * include the contents of all of the domain's text fields.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param {String} default_search_field (Required) The <code>IndexField</code> to use for search requests issued with the <code>q</code> parameter. The default is an empty string, which automatically searches all text fields.
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  update_default_search_field: function(domain_name,default_search_field,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload.default_search_field = default_search_field;

    payload = this.marge_param(payload,opt);
    var response = this.request("UpdateDefaultSearchField", payload );
    return response;
  }, 
  /**
   * Configures the policies that control access to the domain's document and search services. The
   * maximum size of an access policy document is 100 KB.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param {String} access_policies (Required) An IAM access policy as described in <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?AccessPolicyLanguage.html" target="_blank">The Access Policy Language</a> in <em>Using AWS Identity and Access Management</em>. The maximum size of an access policy document is 100 KB. Example: <code>{"Statement": [{"Effect":"Allow", "Action": "*", "Resource": "arn:aws:cs:us-east-1:1234567890:search/movies", "Condition": { "IpAddress": { aws:SourceIp": ["203.0.113.1/32"] } }}, {"Effect":"Allow", "Action": "*", "Resource": "arn:aws:cs:us-east-1:1234567890:documents/movies", "Condition": { "IpAddress": { aws:SourceIp": ["203.0.113.1/32"] } }} ]}</code>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  update_service_access_policies: function(domain_name,access_policies,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload.access_policies = access_policies;

    payload = this.marge_param(payload,opt);
    var response = this.request("UpdateServiceAccessPolicies", payload );
    return response;
  }, 
  /**
   * Configures a stemming dictionary for the search domain. The stemming dictionary is used during
   * indexing and when processing search requests. The maximum size of the stemming dictionary is
   * 500 KB.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param {String} stems (Required) Maps terms to their stems, serialized as a JSON document. The document has a single object with one property "stems" whose value is an object mapping terms to their stems. The maximum size of a stemming document is 500 KB. Example: <code>{ "stems": {"people": "person", "walking": "walk"} }</code>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  update_stemming_options: function(domain_name,stems,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload.stems = stems;

    payload = this.marge_param(payload,opt);
    var response = this.request("UpdateStemmingOptions", payload );
    return response;
  }, 
  /**
   * Configures stopwords for the search domain. Stopwords are used during indexing and when
   * processing search requests. The maximum size of the stopwords dictionary is 10 KB.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param {String} stopwords (Required) Lists stopwords serialized as a JSON document. The document has a single object with one property "stopwords" whose value is an array of strings. The maximum size of a stopwords document is 10 KB. Example: <code>{ "stopwords": ["a", "an", "the", "of"] }</code>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  update_stopword_options: function(domain_name,stopwords,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload.stopwords = stopwords;

    payload = this.marge_param(payload,opt);
    var response = this.request("UpdateStopwordOptions", payload );
    return response;
  }, 
  /**
   * Configures a synonym dictionary for the search domain. The synonym dictionary is used during
   * indexing to configure mappings for terms that occur in text fields. The maximum size of the
   * synonym dictionary is 100 KB.
   *
   * @param {String} domain_name (Required) A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed. [Constraints: The value must be between 3 and 28 characters, and must match the following regular expression pattern: <code>[a-z][a-z0-9\-]+</code>]
   * @param {String} synonyms (Required) Maps terms to their synonyms, serialized as a JSON document. The document has a single object with one property "synonyms" whose value is an object mapping terms to their synonyms. Each synonym is a simple string or an array of strings. The maximum size of a stopwords document is 100 KB. Example: <code>{ "synonyms": {"cat": ["feline", "kitten"], "puppy": "dog"} }</code>
   * @param array $opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  update_synonym_options: function(domain_name,synonyms,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload.synonyms = synonyms;

    payload = this.marge_param(payload,opt);
    var response = this.request("UpdateSynonymOptions", payload );
    return response;
  }
}
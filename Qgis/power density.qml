<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis version="3.34.1-Prizren" maxScale="0" styleCategories="AllStyleCategories" hasScaleBasedVisibilityFlag="0" minScale="1e+08">
  <flags>
    <Identifiable>1</Identifiable>
    <Removable>1</Removable>
    <Searchable>1</Searchable>
    <Private>0</Private>
  </flags>
  <temporal enabled="0" mode="0" fetchMode="0">
    <fixedRange>
      <start></start>
      <end></end>
    </fixedRange>
  </temporal>
  <elevation zscale="1" zoffset="0" band="1" enabled="0" symbology="Line">
    <data-defined-properties>
      <Option type="Map">
        <Option type="QString" value="" name="name"/>
        <Option name="properties"/>
        <Option type="QString" value="collection" name="type"/>
      </Option>
    </data-defined-properties>
    <profileLineSymbol>
      <symbol alpha="1" type="line" name="" clip_to_extent="1" is_animated="0" force_rhr="0" frame_rate="10">
        <data_defined_properties>
          <Option type="Map">
            <Option type="QString" value="" name="name"/>
            <Option name="properties"/>
            <Option type="QString" value="collection" name="type"/>
          </Option>
        </data_defined_properties>
        <layer locked="0" enabled="1" class="SimpleLine" pass="0" id="{53ddd0cc-4346-4742-a155-dae28b91bc76}">
          <Option type="Map">
            <Option type="QString" value="0" name="align_dash_pattern"/>
            <Option type="QString" value="square" name="capstyle"/>
            <Option type="QString" value="5;2" name="customdash"/>
            <Option type="QString" value="3x:0,0,0,0,0,0" name="customdash_map_unit_scale"/>
            <Option type="QString" value="MM" name="customdash_unit"/>
            <Option type="QString" value="0" name="dash_pattern_offset"/>
            <Option type="QString" value="3x:0,0,0,0,0,0" name="dash_pattern_offset_map_unit_scale"/>
            <Option type="QString" value="MM" name="dash_pattern_offset_unit"/>
            <Option type="QString" value="0" name="draw_inside_polygon"/>
            <Option type="QString" value="bevel" name="joinstyle"/>
            <Option type="QString" value="183,72,75,255" name="line_color"/>
            <Option type="QString" value="solid" name="line_style"/>
            <Option type="QString" value="0.6" name="line_width"/>
            <Option type="QString" value="MM" name="line_width_unit"/>
            <Option type="QString" value="0" name="offset"/>
            <Option type="QString" value="3x:0,0,0,0,0,0" name="offset_map_unit_scale"/>
            <Option type="QString" value="MM" name="offset_unit"/>
            <Option type="QString" value="0" name="ring_filter"/>
            <Option type="QString" value="0" name="trim_distance_end"/>
            <Option type="QString" value="3x:0,0,0,0,0,0" name="trim_distance_end_map_unit_scale"/>
            <Option type="QString" value="MM" name="trim_distance_end_unit"/>
            <Option type="QString" value="0" name="trim_distance_start"/>
            <Option type="QString" value="3x:0,0,0,0,0,0" name="trim_distance_start_map_unit_scale"/>
            <Option type="QString" value="MM" name="trim_distance_start_unit"/>
            <Option type="QString" value="0" name="tweak_dash_pattern_on_corners"/>
            <Option type="QString" value="0" name="use_custom_dash"/>
            <Option type="QString" value="3x:0,0,0,0,0,0" name="width_map_unit_scale"/>
          </Option>
          <data_defined_properties>
            <Option type="Map">
              <Option type="QString" value="" name="name"/>
              <Option name="properties"/>
              <Option type="QString" value="collection" name="type"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
    </profileLineSymbol>
    <profileFillSymbol>
      <symbol alpha="1" type="fill" name="" clip_to_extent="1" is_animated="0" force_rhr="0" frame_rate="10">
        <data_defined_properties>
          <Option type="Map">
            <Option type="QString" value="" name="name"/>
            <Option name="properties"/>
            <Option type="QString" value="collection" name="type"/>
          </Option>
        </data_defined_properties>
        <layer locked="0" enabled="1" class="SimpleFill" pass="0" id="{b9af820c-4a11-4cd3-aa28-a39c557dcf9b}">
          <Option type="Map">
            <Option type="QString" value="3x:0,0,0,0,0,0" name="border_width_map_unit_scale"/>
            <Option type="QString" value="183,72,75,255" name="color"/>
            <Option type="QString" value="bevel" name="joinstyle"/>
            <Option type="QString" value="0,0" name="offset"/>
            <Option type="QString" value="3x:0,0,0,0,0,0" name="offset_map_unit_scale"/>
            <Option type="QString" value="MM" name="offset_unit"/>
            <Option type="QString" value="35,35,35,255" name="outline_color"/>
            <Option type="QString" value="no" name="outline_style"/>
            <Option type="QString" value="0.26" name="outline_width"/>
            <Option type="QString" value="MM" name="outline_width_unit"/>
            <Option type="QString" value="solid" name="style"/>
          </Option>
          <data_defined_properties>
            <Option type="Map">
              <Option type="QString" value="" name="name"/>
              <Option name="properties"/>
              <Option type="QString" value="collection" name="type"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
    </profileFillSymbol>
  </elevation>
  <customproperties>
    <Option type="Map">
      <Option type="bool" value="false" name="WMSBackgroundLayer"/>
      <Option type="bool" value="false" name="WMSPublishDataSourceUrl"/>
      <Option type="int" value="0" name="embeddedWidgets/count"/>
      <Option type="QString" value="Value" name="identify/format"/>
    </Option>
  </customproperties>
  <mapTip enabled="1"></mapTip>
  <pipe-data-defined-properties>
    <Option type="Map">
      <Option type="QString" value="" name="name"/>
      <Option name="properties"/>
      <Option type="QString" value="collection" name="type"/>
    </Option>
  </pipe-data-defined-properties>
  <pipe>
    <provider>
      <resampling zoomedInResamplingMethod="nearestNeighbour" enabled="false" zoomedOutResamplingMethod="nearestNeighbour" maxOversampling="2"/>
    </provider>
    <rasterrenderer type="singlebandpseudocolor" nodataColor="" classificationMin="0" band="1" opacity="1" alphaBand="-1" classificationMax="1000">
      <rasterTransparency/>
      <minMaxOrigin>
        <limits>None</limits>
        <extent>WholeRaster</extent>
        <statAccuracy>Estimated</statAccuracy>
        <cumulativeCutLower>0.02</cumulativeCutLower>
        <cumulativeCutUpper>0.98</cumulativeCutUpper>
        <stdDevFactor>2</stdDevFactor>
      </minMaxOrigin>
      <rastershader>
        <colorrampshader classificationMode="2" maximumValue="1000" minimumValue="0" colorRampType="DISCRETE" labelPrecision="4" clip="0">
          <colorramp type="gradient" name="[source]">
            <Option type="Map">
              <Option type="QString" value="43,131,186,255" name="color1"/>
              <Option type="QString" value="215,25,28,255" name="color2"/>
              <Option type="QString" value="cw" name="direction"/>
              <Option type="QString" value="0" name="discrete"/>
              <Option type="QString" value="gradient" name="rampType"/>
              <Option type="QString" value="rgb" name="spec"/>
              <Option type="QString" value="0.25;171,221,164,255;rgb;cw:0.5;255,255,191,255;rgb;cw:0.75;253,174,97,255;rgb;cw" name="stops"/>
            </Option>
          </colorramp>
          <item alpha="255" label="&lt;= 50.0000" color="#4595b6" value="50"/>
          <item alpha="255" label="50.0000 - 100.0000" color="#5ea7b1" value="100"/>
          <item alpha="255" label="100.0000 - 150.0000" color="#78b9ad" value="150"/>
          <item alpha="255" label="150.0000 - 200.0000" color="#91cba8" value="200"/>
          <item alpha="255" label="200.0000 - 250.0000" color="#abdda4" value="250"/>
          <item alpha="255" label="250.0000 - 300.0000" color="#bce4a9" value="300"/>
          <item alpha="255" label="300.0000 - 350.0000" color="#cdebaf" value="350"/>
          <item alpha="255" label="350.0000 - 400.0000" color="#ddf1b4" value="400"/>
          <item alpha="255" label="400.0000 - 450.0000" color="#eef8ba" value="450"/>
          <item alpha="255" label="450.0000 - 500.0000" color="#ffffbf" value="500"/>
          <item alpha="255" label="500.0000 - 550.0000" color="#ffefac" value="550"/>
          <item alpha="255" label="550.0000 - 600.0000" color="#fedf99" value="600"/>
          <item alpha="255" label="600.0000 - 650.0000" color="#fece87" value="650"/>
          <item alpha="255" label="650.0000 - 700.0000" color="#fdbe74" value="700"/>
          <item alpha="255" label="700.0000 - 750.0000" color="#fdae61" value="750"/>
          <item alpha="255" label="750.0000 - 800.0000" color="#f59053" value="800"/>
          <item alpha="255" label="800.0000 - 850.0000" color="#ee7245" value="850"/>
          <item alpha="255" label="850.0000 - 900.0000" color="#e65538" value="900"/>
          <item alpha="255" label="900.0000 - 950.0000" color="#df372a" value="950"/>
          <item alpha="255" label="> 950.0000" color="#d7191c" value="inf"/>
          <rampLegendSettings direction="0" maximumLabel="" orientation="2" useContinuousLegend="1" minimumLabel="" suffix="" prefix="">
            <numericFormat id="basic">
              <Option type="Map">
                <Option type="invalid" name="decimal_separator"/>
                <Option type="int" value="6" name="decimals"/>
                <Option type="int" value="0" name="rounding_type"/>
                <Option type="bool" value="false" name="show_plus"/>
                <Option type="bool" value="true" name="show_thousand_separator"/>
                <Option type="bool" value="false" name="show_trailing_zeros"/>
                <Option type="invalid" name="thousand_separator"/>
              </Option>
            </numericFormat>
          </rampLegendSettings>
        </colorrampshader>
      </rastershader>
    </rasterrenderer>
    <brightnesscontrast brightness="0" contrast="0" gamma="1"/>
    <huesaturation grayscaleMode="0" invertColors="0" colorizeRed="255" saturation="0" colorizeGreen="128" colorizeBlue="128" colorizeOn="0" colorizeStrength="100"/>
    <rasterresampler maxOversampling="2"/>
    <resamplingStage>resamplingFilter</resamplingStage>
  </pipe>
  <blendMode>0</blendMode>
</qgis>

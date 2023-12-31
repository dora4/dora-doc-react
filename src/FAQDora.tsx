/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function FAQDora(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <Section title="什么是Dora SDK的生命周期注入？">
                Dora SDK的生命周期注入是指，通过在AndroidManifest.xml中配置metadata标签来实现activity、fragment以及application的全局生命周期注入，生命周期包括onCreate()等。你可以使用官方的扩展包进行生命周期的注入，也可以通过自定义GlobalConfig来实现生命周期的注入。
            </Section>

            <Section title="使用Dora SDK的生命周期注入有什么好处？">
                你可以将一些常用的第三方SDK的生命周期中要写的代码抽取出来，封装到配置中。这样你只需要编写一次代码，就可以在所有项目中复用这些生命周期的实现了。
            </Section>

            <Section title="Dora SDK的生命周期注入是如何实现的？">
                是由框架内部实现的，在应用启动时，通过解析AndroidManifest.xml中配置在application标签下的meta-data
                 标签的数据，来自动执行生命周期中的方法。
            </Section>

            <Section title="PageTransformer使用在什么场景？">
                PageTransformer是Dora SDK中的流式切换的实现，使用在Activity中切换多个Fragment的场景，比如使用教程页面，这些Fragment被放在一个线性表中。你可以直接在BaseActivity或BaseFragment的子类中调用showPage()方法来显示指定key的页面，也可以调用lastPage()和nextPage()方法来自动显示上一页、下一页。你可以通过改变isPageLoop，来决定
                页面是否循环。即第一页的上一页是否是最后一页，最后一页的下一页是否是第一页。
            </Section>

            <Section title="crash包的作用是什么？">
                Dora SDK的crash包用来收集和展示崩溃log给开发者，只应该在debug包被初始化。
            </Section>

            <Section title="crash包结构是否过于复杂？">
                是的，目前来说有过度设计的嫌疑，但目前并不考虑优化，你可以当作是结构设计的示例。
            </Section>

            <Section title="Dora SDK是否会将Java转换成Kotlin语言？">
                短期以及长期都没有这个计划，java语言具有更大的受众群体，且具有更好的兼容性和稳定性。
            </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default FAQDora;
